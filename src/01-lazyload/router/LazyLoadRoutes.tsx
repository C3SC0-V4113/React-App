import { RouteObject } from "react-router-dom";
import LazyPage1 from "../pages/LazyPage1";
import LazyPage2 from "../pages/LazyPage2";
import LazyPage3 from "../pages/LazyPage3";

export const LazyLoadRoutes: RouteObject[] = [
  {
    index: true,
    element: <LazyPage1 />,
  },
  {
    path: "/lazy-load/lazy2",
    element: <LazyPage2 />,
  },
  {
    path: "/lazy-load/lazy3",
    element: <LazyPage3 />,
  },
];
