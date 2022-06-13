const express = require("express");
import React from "react";
import ReactDomServer from "react-dom/server";
import Document from "../components/document";
import App from "../components/app";
import { StaticRouter } from "react-router-dom/server";
import { fetchHome, fetchUser } from "../core/api";

const router = express.Router();

router.get("*", async (req, res) => {
  let data = {};
  try {
    data = await fetchHome();
  } catch (e) {}
  const appString = ReactDomServer.renderToString(
    <StaticRouter location={req.url} context={data}>
      <App />
    </StaticRouter>
  );

  const html = ReactDomServer.renderToStaticMarkup(
    <Document>{appString}</Document>
  );
  res.send(html);
});

module.exports = router;
