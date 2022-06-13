const express = require("express");
import React from "react";
import ReactDomServer from "react-dom/server";
import Document from "./components/document";
import App from "./components/app";
import { StaticRouter } from "react-router-dom/server";

const router = express.Router();

router.get("*", (req, res) => {
  const appString = ReactDomServer.renderToString(
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>
  );

  const html = ReactDomServer.renderToStaticMarkup(
    <Document>{appString}</Document>
  );
  res.send(html);
});

module.exports = router;
