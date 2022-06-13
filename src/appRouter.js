const express = require("express");
import React from "react";
import ReactDomServer from "react-dom/server";
import Document from "./components/document";
import App from "./components/app";
const router = express.Router();

const appString = ReactDomServer.renderToString(<App />);

const html = ReactDomServer.renderToStaticMarkup(
  <Document>{appString}</Document>
);

router.get("/", (req, res) => {
  res.send(html);
});

module.exports = router;
