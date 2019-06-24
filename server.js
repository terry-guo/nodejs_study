var http = require('http');
var fs = require("fs")

var server = http.createServer(function (req, res) {
  let html = fs.readFileSync('index.html','utf-8')
  res.writeHead(200, {'Content-Type': 'text/html','Access-Control-Allow-Origin':'*'});
  res.end(html);
});

server.listen(8888, function() {
  console.log('listening on localhost:8888');
});