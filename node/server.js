const http = require("http");
const url = require("url");

function start(router) {
  http
    .createServer(function(request, response) {
      const urlPath = url.parse(request.url).pathname;
      router(urlPath);
      response.writeHead(200, { "Content-Type": "text/plain" });
      // response.write(urlPath);
      response.end();
    })
    .listen(3000);
}

exports.start = start;
