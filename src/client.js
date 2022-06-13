import React from "react";
import ReactDom from "react-dom";
import App from "./components/app";

const root = document.getElementById("root");

ReactDom.hydrate(<App />, root);
