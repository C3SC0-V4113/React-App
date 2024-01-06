import "../styles/styles.css";
import { Formik, Form } from "formik";
import { MyCheckBoxInput, MySelectInput, MyTextInput } from "../components";
import * as Yup from "yup";

export const FormikAbstract = () => {
  return (
    <div>
      <h1>Formik Abstract Tutorial</h1>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          terms: false,
          jobType: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Debe tener 15 caracteres o menos")
            .required("Requerido"),
          lastName: Yup.string()
            .max(10, "Debe tener 10 caracteres o menos")
            .required("Requerido"),
          email: Yup.string()
            .email("Formato de correo no valido")
            .required("Requerido"),
          terms: Yup.boolean().oneOf(
            [true],
            "Debe de aceptar los terminos de uso"
          ),
          jobType: Yup.string()
            .required("Requerido")
            .notOneOf(["it-jr"], "No se están permitiendo jrs newbie"),
        })}
      >
        {() => (
          <Form noValidate>
            <MyTextInput
              label="First Name"
              name="firstName"
              placeholder="Tu nombre"
            />

            <MyTextInput
              label="Last Name"
              name="lastName"
              placeholder="Tu apellido"
            />

            <MyTextInput label="Email Address" name="email" type="email" />

            <MySelectInput label={"Job Type"} name={"jobType"}>
              <option value="">Pick Something</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-senior">IT Senior</option>
              <option value="it-jr">IT Junior</option>
            </MySelectInput>

            <MyCheckBoxInput label="Terms of Service" name="terms" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
