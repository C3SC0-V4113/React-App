import { RouteObject } from "react-router-dom";
import {
  DynamicFormik,
  FormikAbstract,
  FormikBasicPage,
  FormikComponents,
  FormikYupPage,
  RegisterFormikPage,
  RegisterPage,
} from "../pages";

export const FormRoutes: RouteObject[] = [
  {
    index: true,
    handle: "Register",
    element: <RegisterPage />,
  },
  {
    path: "/formik",
    handle: "Formik",
    element: <FormikBasicPage />,
  },
  {
    path: "/formik-yup",
    handle: "Formik Yup",
    element: <FormikYupPage />,
  },
  {
    path: "/formik-components",
    handle: "Formik Components",
    element: <FormikComponents />,
  },
  {
    path: "/formik-abstract",
    handle: "Formik Abstract",
    element: <FormikAbstract />,
  },
  {
    path: "/formik-register",
    handle: "Formik Register",
    element: <RegisterFormikPage />,
  },
  {
    path: "/formik-dynamic",
    handle: "Formik Dynamic",
    element: <DynamicFormik />,
  },
];
