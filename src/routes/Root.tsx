import { NavLink, Outlet } from "react-router-dom";
import logo from "../assets/react.svg";

import { LazyRoutes } from "./LazyRoutes";

const Root = () => {
  return (
    <div className="main-layout">
      <nav>
        <img src={logo} alt="React Logo" />
        <ul>
          {LazyRoutes.map((route, index) => (
            <li key={index}>
              <NavLink
                to={route.path ? route.path : "/"}
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                {route.handle}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Root;
