const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./src/index.js",
  mode: "development",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist")
  },
  devServer: {
    contentBase: "./dist"
  },
  module: {},
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html"
    })
  ]
};
