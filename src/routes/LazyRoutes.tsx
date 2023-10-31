import { RouteObject, Navigate } from "react-router-dom";
import { lazy } from "react";
import NoLazy from "../01-lazyload/pages/NoLazy";
import { LazyLoadRoutes } from "../01-lazyload/router/LazyLoadRoutes";

const LazyLoad = await lazy(() => import("./LazyLoad"));

export const LazyRoutes: RouteObject[] = [
  {
    path: "lazy-load",
    handle: "LazyLoad",
    element: <LazyLoad />,
    children: [...LazyLoadRoutes],
  },
  {
    path: "no-lazy",
    handle: "No Lazy",
    element: <NoLazy />,
  },
  {
    path: "*",
    element: <Navigate to={"/lazy-load"} replace />,
  },
];
