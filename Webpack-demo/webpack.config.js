const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const DemoPlugin = require('./src/plugin/DemoPlugin.js')
// const BundleAnalyzerPlugin =
//   require("webpack-bundle-an？alyzer").BundleAnalyzerPlugin;
// const DashboardPlugin = require("webpack-dashboard/plugin");

module.exports = {
  //   entry: "./src/index.js",
  entry: {
    index: './src/index.js',
    // print: "./src/print.js",
  },
  module: {
    rules: [
      // {
      //   test: /\.(png|jpg)$/i,
      //   use: ["file-loader"],
      // },
      // {
      //   test: /\.(png|jpg)$/i,
      //   use: ["url-loader"],
      // },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    // filename: "bundle.js",
    filename: '[name].bundle.js',
    clean: true,
    publicPath: '/',
  },
  // 帮助打包后的文件定位错误
  devtool: 'inline-source-map',
  // 保持浏览器事实刷新
  devServer: {
    hot: true,
    host: 'localhost',
    port: '8000',
    static: './dist',
  },
  target: 'web',
  plugins: [
    new DemoPlugin({ name: 'wwr' }),
    new HtmlWebpackPlugin({
      title: 'development',
    }),
    new webpack.HotModuleReplacementPlugin(),
    // 打包文件大小可视化
    // new BundleAnalyzerPlugin(),
    // 展示相关打包信息
    // new DashboardPlugin(),
  ],
  mode: 'development',
}
