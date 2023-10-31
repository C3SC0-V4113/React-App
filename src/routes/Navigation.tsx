import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { LazyRoutes } from "./LazyRoutes";
import { Suspense } from "react";
import { lazy } from "react";

const LazyRoot = await lazy(() => import("./Root"));

export const Navigation = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LazyRoot />,
      children: LazyRoutes,
    },
    {
      path: "*",
      element: <Navigate to={"/lazy-load"} replace />,
    },
  ]);
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <RouterProvider router={router} />
    </Suspense>
  );
};
