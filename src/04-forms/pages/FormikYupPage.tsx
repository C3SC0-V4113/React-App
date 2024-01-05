import { useFormik } from "formik";
import "../styles/styles.css";
import * as Yup from "yup";

const FormikYupPage = () => {
  const { handleChange, values, handleSubmit, errors, handleBlur, touched } =
    useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        email: "",
      },
      onSubmit: (values) => {
        console.log(values);
      },
      validationSchema: Yup.object({
        firstName: Yup.string()
          .max(15, "Debe tener 15 caracteres o menos")
          .required("Requerido"),
        lastName: Yup.string()
          .max(10, "Debe tener 10 caracteres o menos")
          .required("Requerido"),
        email: Yup.string()
          .email("Formato de correo no valido")
          .required("Requerido"),
      }),
    });

  return (
    <div>
      <h1>Formik Yup Tutorial</h1>
      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          name="firstName"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.firstName}
        />
        {touched.firstName && errors.firstName && (
          <span>{errors.firstName}</span>
        )}

        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          name="lastName"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.lastName}
        />
        {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
        />
        {touched.email && errors.email && <span>{errors.email}</span>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormikYupPage;
