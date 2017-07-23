const webpack = require("webpack");
const path = require("path");
const { spawn } = require("child_process");

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
    filename: "bundle.js",
    historyApiFallback: true,
    setup() {
      spawn("electron", ["."], {
        shell: true,
        env: process.env,
        stdio: "inherit"
      })
        .on("close", code => process.exit(0))
        .on("error", spawnError => console.error(spawnError));
    }
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
