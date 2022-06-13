import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./Home";
import User from "./User";
import NotFound from "./NotFound";

export default () => {
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
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/404" element={<NotFound />} />
      </Routes>
    </>
  );
};
