import {
  NavLink,
  Navigate,
  Outlet,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import logo from "../assets/react.svg";
import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";

const Root = () => {
  return (
    <div className="main-layout">
      <nav>
        <img src={logo} alt="React Logo" />
        <ul>
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) => (isActive ? "nav-active" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/lazy2"}
              className={({ isActive }) => (isActive ? "nav-active" : "")}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/lazy3"}
              className={({ isActive }) => (isActive ? "nav-active" : "")}
            >
              Users
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export const Navigation = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          index: true,
          element: <LazyPage1 />,
        },
        {
          path: "lazy2",
          element: <LazyPage2 />,
        },
        {
          path: "lazy3",
          element: <LazyPage3 />,
        },
        {
          path: "*",
          element: <Navigate to={"/"} replace />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};
