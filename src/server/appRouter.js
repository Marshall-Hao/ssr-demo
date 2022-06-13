const express = require("express");
import React from "react";
import ReactDomServer from "react-dom/server";
import Document from "../components/document";
import App from "../components/app";
import { matchPath } from "react-router-dom";
import { StaticRouter } from "react-router-dom/server";
import { fetchUser } from "../core/api";
import { dataContext } from "../core/context";
import routes from "../core/routes";

const router = express.Router();

router.get("*", async (req, res) => {
  let data = {};
  let getData = null;
  routes.some((route) => {
    const match = matchPath(req.path, route.path);
    if (match) {
      getData = route.element.type.getData || {};
    }
    return match;
  });
  // if (typeof getData === "function") {
  try {
    data = await getData();
    const appString = await ReactDomServer.renderToString(
      <StaticRouter location={req.url}>
        <dataContext.Provider value={data}>
          <App />
        </dataContext.Provider>
      </StaticRouter>
    );

    const html = ReactDomServer.renderToStaticMarkup(
      <Document>{appString}</Document>
    );
    res.send(html);
  } catch (e) {}
  // }
});

module.exports = router;
