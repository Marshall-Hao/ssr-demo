import Home from "../components/Home";
import User from "../components/User";
import NotFound from "../components/NotFound";
import React from "react";

export default [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/user",
    element: <User />,
  },
  {
    path: "/404",
    element: <NotFound />,
  },
];
