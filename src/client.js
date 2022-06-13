import React from "react";
import ReactDom from "react-dom";
import App from "./components/app";
import { BrowserRouter } from "react-router-dom";

const root = document.getElementById("root");

ReactDom.hydrate(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  root
);
