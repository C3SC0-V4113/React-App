import { RouteObject } from "react-router-dom";
// import { FormsPages } from "../pages/FormsPages";
import RegisterPage from "../pages/RegisterPage";
import FormikBasicPage from "../pages/FormikBasicPage";

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
];
