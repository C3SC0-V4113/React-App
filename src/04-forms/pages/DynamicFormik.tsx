import { Form, Formik } from "formik";
// import * as Yup from "yup";

import { MyTextInput } from "../components";

import formJson from "../data/custom-form.json";

export const DynamicFormik = () => {
  return (
    <div>
      <h1>Dynamic Formik</h1>
      <Formik initialValues={{}} onSubmit={(values) => console.log(values)}>
        {({ handleReset }) => (
          <Form noValidate>
            {formJson.map(({ type, label, name, placeholder }) => {
              return (
                <MyTextInput
                  key={name}
                  type={type as "text" | "email" | "password"}
                  label={label}
                  name={name}
                  placeholder={placeholder}
                />
              );
            })}
            <button type="submit">Submit</button>
            <button type="button" onClick={handleReset}>
              Reset
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
