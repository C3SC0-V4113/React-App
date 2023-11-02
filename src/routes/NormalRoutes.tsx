import { RouteObject } from "react-router-dom";

export const NormalRoutes: RouteObject[] = [
  {
    index: true,
    element: <h1>Home</h1>,
  },
  {
    path: "/about",
    element: <h1>About</h1>,
  },
  {
    path: "/users",
    element: <h1>Users</h1>,
  },
];
