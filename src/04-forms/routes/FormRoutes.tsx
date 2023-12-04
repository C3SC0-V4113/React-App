import { RouteObject } from "react-router-dom";
// import { FormsPages } from "../pages/FormsPages";
import RegisterPage from "../pages/RegisterPage";

export const FormRoutes: RouteObject[] = [
  {
    index: true,
    element: <RegisterPage />,
  },
];
