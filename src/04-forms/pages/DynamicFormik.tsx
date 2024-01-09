import { Form, Formik } from "formik";
// import * as Yup from "yup";

import { MySelectInput, MyTextInput } from "../components";

import formJson from "../data/custom-form.json";

const initialValues: { [key: string]: string | number | boolean } = {};

for (const input of formJson) {
  initialValues[input.name] = input.value;
}

export const DynamicFormik = () => {
  return (
    <div>
      <h1>Dynamic Formik</h1>

      <Formik
        initialValues={initialValues}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleReset }) => (
          <Form noValidate>
            {formJson.map(({ type, label, name, placeholder, options }) => {
              if (type === "input" || type === "password" || type === "email") {
                return (
                  <MyTextInput
                    key={name}
                    type={type as "text" | "email" | "password"}
                    label={label}
                    name={name}
                    placeholder={placeholder}
                  />
                );
              } else if (type === "select") {
                return (
                  <MySelectInput key={name} label={label} name={name}>
                    <option value={""}>Select an option</option>
                    {options?.map(({ id, label }) => (
                      <option key={id} value={id}>
                        {label}
                      </option>
                    ))}
                  </MySelectInput>
                );
              }

              throw new Error(`El tipo ${type}, no es soportado`);
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
