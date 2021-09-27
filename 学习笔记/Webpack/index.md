### 1. `file-loader` 和 `url-loader`的区别是什么？

- `file-loader`

  主要解决开发时引入文件路径和打包后文件的路径不一致的问题。

- `url-loader`

  图片较多时，会有较多的 http 请求，会降低页面性能。`url-loader`会将引入的图片编码，生成 dataURL 并将其打包到文件中，最终引入这个 `dataURL` 就能访问图片资源。`url-loader`提供了一个`limit`参数，小于`limit`字节的文件会被转为`dataURL`，大于`limit`的会使用`file-loader`进行 copy。

- 联系

  `url-loader` 内部封装了 `file-loader`。`url-loader` 不依赖于 `file-loader`，即使用 `url-loader` 时，只需要安装 `url-loader` 即可，不需要安装 `file-loader`。

### 2. 常见的`loader`

- `file-loader` `url-loader`
- `image-loader`
- `babel-loader`
- `style-loader` `css-loader` `less-loader` `sass-loader`
- `ts-loader` `json-loader`
- `eslint-loader` `tslint-loader`
- `vue-loader`

### 3. 常见的`plugin`

- `ignore-plugin` ：忽略部分文件
- `html-webpack-plugin` ：简化HTML文件创建
- `web-webpack-plugin` ：可方便的为单页面应用输出HTML
- `clean-webpack-plugin` ：清理目录
- `speed-measure-webpack-plugin` ：可以查看Loader和Plugin执行耗时
- `webpack-bundle-analyzer` ：可视化Webpack输出文件的体积

