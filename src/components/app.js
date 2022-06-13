import React from "react";
import {
  Routes,
  Route,
  NavLink,
  useRoutes,
} from "react-router-dom";

import AllRoutes from "../core/routes";

export default () => {
  const routes = useRoutes(AllRoutes);
  return (
    <>
      <ul>
        <li>
          <NavLink to="/">to Home</NavLink>
        </li>
        <li>
          <NavLink to="/user">to User</NavLink>
        </li>
        <li>
          <NavLink to="/404">to 404</NavLink>
        </li>
      </ul>
      {routes}
    </>
  );
};
