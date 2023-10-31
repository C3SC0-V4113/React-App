import { NavLink, Outlet } from "react-router-dom";

const LazyLoad = () => {
  return (
    <div>
      <h1>LazyLoad</h1>
      <ul>
        <li>
          <NavLink to={"/lazy-load/"}>LazyPage1</NavLink>
        </li>
        <li>
          <NavLink to={"/lazy-load/lazy2"}>LazyPage2</NavLink>
        </li>
        <li>
          <NavLink to={"/lazy-load/lazy3"}>LazyPage3</NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default LazyLoad;
