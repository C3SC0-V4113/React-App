import { RouteObject } from "react-router-dom";
import { FormsPages } from "../pages/FormsPages";

export const FormRoutes: RouteObject[] = [
  {
    index: true,
    element: <FormsPages />,
  },
];
