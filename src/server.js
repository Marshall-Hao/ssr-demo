require("@babel/register")({
  presets: ["@babel/preset-env", "@babel/preset-react"],
});

const express = require("express");

const appRouter = require("./appRouter");

const app = express();

app.use("/", appRouter);

// *https://expressjs.com/en/starter/static-files.html 可直接使用静态资源
app.use(express.static("build"));

app.listen(3000, () => {
  console.log("demo runs on port 3000");
});
