import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import "../styles/styles.css";

export const RegisterFormikPage = () => {
  return (
    <div>
      <h1>Register Formik Page</h1>
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
          passwordRepeat: "",
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={Yup.object({
          username: Yup.string()
            .min(2, "Debe tener almenos 2 caracteres")
            .max(15, "Debe tener 15 caracteres o menos")
            .required("Requerido"),
          email: Yup.string()
            .email("Formato de correo no valido")
            .required("Requerido"),
          password: Yup.string()
            .min(6, "Debe tener almenos 6 caracteres")
            .required("Requerido"),
          passwordRepeat: Yup.string()
            .oneOf([Yup.ref("password")], "Contraseñas deben ser iguales")
            .required("Requerido"),
        })}
      >
        {({ resetForm }) => (
          <Form noValidate>
            <label htmlFor="username">Name</label>
            <Field name="username" type="text" placeholder="Name" />
            <ErrorMessage name={"username"} component={"span"} />

            <label htmlFor="email">Email Address</label>
            <Field name="email" type="email" />
            <ErrorMessage name={"email"} component={"span"} />

            <label htmlFor="password">Password</label>
            <Field name="password" type="password" />
            <ErrorMessage name={"password"} component={"span"} />

            <label htmlFor="passwordRepeat">Repeat Password</label>
            <Field name="passwordRepeat" type="password" />
            <ErrorMessage name={"passwordRepeat"} component={"span"} />

            <button type="submit">Create</button>
            <button type="button" onClick={() => resetForm()}>
              Reset
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
