import { Formik, Field, Form, ErrorMessage } from "formik";
import "../styles/styles.css";
import * as Yup from "yup";

export const FormikComponents = () => {
  return (
    <div>
      <h1>Formik Components Tutorial</h1>

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
            <label htmlFor="firstName">First Name</label>
            <Field name="firstName" type="text" placeholder="First Name" />
            <ErrorMessage name={"firstName"} component={"span"} />

            <label htmlFor="lastName">Last Name</label>
            <Field name="lastName" type="text" />
            <ErrorMessage name={"lastName"} component={"span"} />

            <label htmlFor="email">Email Address</label>
            <Field name="email" type="email" />
            <ErrorMessage name={"email"} component={"span"} />

            <label htmlFor="jobType">Job Type</label>
            <Field name="jobType" as="select">
              <option value="">Pick Something</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-senior">IT Senior</option>
              <option value="it-jr">IT Junior</option>
            </Field>
            <ErrorMessage name={"jobType"} component={"span"} />

            <label>
              <Field name="terms" type="checkbox" />
              Terms of Service
            </label>
            <ErrorMessage name={"terms"} component={"span"} />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
