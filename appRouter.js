const express = require("express");
import React from "react";
import ReactDomServer from "react-dom/server";
import Document from "./document";
const router = express.Router();

const html = ReactDomServer.renderToString(<Document />);

router.get("/", (req, res) => {
  res.send(html);
});

module.exports = router;
