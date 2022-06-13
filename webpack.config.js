const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const { options } = require("./src/server/apiRouter");

module.exports = {
  entry: "./src/client.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "main.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ["source-map-loader", "babel-loader"],
        exclude: /node_modules/,
      },
    ],
  },
  devtool: "source-map",
  //   plugins: [
  //     new CopyPlugin({
  //       patterns: [{ from: "public/index.html" }],
  //     }),
  //   ],
};
