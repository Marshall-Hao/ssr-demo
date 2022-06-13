require("@babel/register")({
  presets: ["@babel/preset-react"],
});

const express = require("express");
const ReactDomServer = require("react-dom/server");
const Document = require("./document");

const app = express();

const html = ReactDomServer.renderToStaticMarkup(
  <Document />
);

app.get("/", (req, res) => {
  res.send(html);
});

app.listen(3000, () => {
  console.log("demo runs on port 3000");
});
