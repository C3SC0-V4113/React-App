import { RouteObject, Navigate } from "react-router-dom";
import { lazy } from "react";

const Lazy1 = await lazy(
  () =>
    import(/*webpackChunkName: "LazyPage1"*/ "../01-lazyload/pages/LazyPage1")
);
const Lazy2 = await lazy(
  () =>
    import(/*webpackChunkName: "LazyPage2"*/ "../01-lazyload/pages/LazyPage2")
);
const Lazy3 = await lazy(
  () =>
    import(/*webpackChunkName: "LazyPage3"*/ "../01-lazyload/pages/LazyPage3")
);

export const LazyRoutes: RouteObject[] = [
  {
    index: true,
    handle: "LazyPage 1",
    element: <Lazy1 />,
  },
  {
    path: "lazy2",
    handle: "LazyPage 2",
    element: <Lazy2 />,
  },
  {
    path: "lazy3",
    handle: "LazyPage 3",
    element: <Lazy3 />,
  },
  {
    path: "*",
    element: <Navigate to={"/"} replace />,
  },
];
