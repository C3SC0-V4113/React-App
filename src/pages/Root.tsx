import logo from "../assets/react.svg";
import { NavLink, Outlet } from "react-router-dom";

export const Root = () => {
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
              to={"/about"}
              className={({ isActive }) => (isActive ? "nav-active" : "")}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/users"}
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
