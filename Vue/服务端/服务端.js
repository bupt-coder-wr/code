// 导入 http 内置模块
const http = require('http')
// 创建一个 http 服务器
const server = http.createServer()
//这个核心模块，能帮我们解析URL地址，从而拿到pathname，query
const urlModule = require('url');

//监听 http 服务器的 request 请求
server.on('request', function (req, res) {
    //write your  codes here
    // const url = req.url
    const {
        pathname: url,
        query
    } = urlModule.parse(req.url, true)

    var data = {
        name: 'xjj',
        age: 19,
        gender: 'female'
    }
    if (url === '/getscript') {
        //拼接一个合法的JS脚本， 这里拼接是一个方法
        var scriptStr = `${query.callback}(${JSON.stringify(data)})`
        res.end(scriptStr)
    } else {
        res.end('404')
    }
})

//指定端口号并开启服务器监听
server.listen(3000, function () {
    console.log('server listen at http://127.0.0.1:3000')
})