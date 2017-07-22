const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: {
    app: ["webpack/hot/dev-server", "./src/index.js"]
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public")
  },
  devServer: {
    contentBase: path.join(__dirname, "public"),
    filename: "bundle.js"
  },
  devtool: process.env.NODE_ENV === "production" ? "source-map" : "",
  module: {
    loaders: [
      { test: /\.js$/, loader: "babel-loader", exclude: /node_modules/ },
      { test: /\.css$/, use: ["style-loader", "css-loader"] }
    ]
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};
