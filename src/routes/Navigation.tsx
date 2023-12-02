import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { Root } from "../pages/Root";
import { FormRoutes } from "../04-forms/routes/FormRoutes";
// import { ShoopingRoutes } from "../03-state-initializer/routes/ShoopingRoutes";
// import { ShoopingRoutes } from "../02-component-pattern/routes/ShoopingRoutes";
// import { NormalRoutes } from "./NormalRoutes";
// import { LazyRoutes } from "./LazyRoutes";
// import { Suspense } from "react";
// import { lazy } from "react";

// const LazyRoot = await lazy(() => import("./Root"));

export const Navigation = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      // children: LazyRoutes,
      children: FormRoutes,
    },
    {
      path: "*",
      element: <Navigate to={"/"} replace />,
    },
  ]);
  return (
    // <Suspense fallback={<span>Loading...</span>}>
    <RouterProvider router={router} />
    // </Suspense>
  );
};
