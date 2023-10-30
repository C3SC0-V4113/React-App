import { RouteObject, Navigate } from "react-router-dom";
import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";

export const LazyRoutes: RouteObject[] = [
  {
    index: true,
    handle: "LazyPage 1",
    element: <LazyPage1 />,
  },
  {
    path: "lazy2",
    handle: "LazyPage 2",
    element: <LazyPage2 />,
  },
  {
    path: "lazy3",
    handle: "LazyPage 3",
    element: <LazyPage3 />,
  },
  {
    path: "*",
    element: <Navigate to={"/"} replace />,
  },
];
