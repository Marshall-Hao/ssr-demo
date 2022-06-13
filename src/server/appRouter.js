const express = require("express");
import React from "react";
import ReactDomServer from "react-dom/server";
import Document from "../components/document";
import App from "../components/app";
import { StaticRouter } from "react-router-dom/server";
import { fetchUser } from "../core/api";
import { dataContext } from "../core/context";

const router = express.Router();

router.get("*", async (req, res) => {
  let data = {};
  try {
    data = await fetchUser();
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
});

module.exports = router;
