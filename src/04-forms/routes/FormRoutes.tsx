import { RouteObject } from "react-router-dom";
// import { FormsPages } from "../pages/FormsPages";
import RegisterPage from "../pages/RegisterPage";
import FormikBasicPage from "../pages/FormikBasicPage";
import FormikYupPage from "../pages/FormikYupPage";
import FormikComponents from "../pages/FormikComponents";
import FormikAbstract from "../pages/FormikAbstract";

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
];
