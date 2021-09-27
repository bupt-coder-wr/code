const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  //   entry: "./src/index.js",
  entry: {
    index: "./src/index.js",
    print: "./src/print.js",
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg)$/i,
        use: ["file-loader"],
      },
      {
        test: /\.(png|jpg)$/i,
        use: ["url-loader"],
      },
      // {
      //   test: "/\.(png|jpg)$/i",
      //   type: "asset/resource",
      // },
      // {
      //   test: /\.(png|svg|jpg|jpeg|gif)$/i,
      //   type: "asset/resource",
      // },
    ],
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
    // 打包文件大小可视化
    new BundleAnalyzerPlugin(),
  ],
  mode: "development",
};
