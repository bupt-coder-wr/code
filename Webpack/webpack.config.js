const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  //   entry: "./src/index.js",
  entry: {
    index: "./src/index.js",
    print: "./src/print.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    // filename: "bundle.js",
    filename: "[name].bundle.js",
    clean: true,
    publicPath: "/",
  },
  // 帮助打包后的文件定位错误
  devtool: "inline-source-map",
  // 保持浏览器事实刷新
  devServer: {
    host: "localhost",
    port: "8000",
    static: "./dist",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "development",
    }),
  ],
  mode: "development",
};
