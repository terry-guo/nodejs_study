var http = require('http');



var data = {key: '小鱼干 ', title: 'hello world'};

var server = http.createServer(function (req, res) {
  res.writeHead(200, {
      'Content-Type': 'application/json',
    //    'Access-Control-Allow-Origin':'*'
    });
  res.end(JSON.stringify(data));
});

server.listen(8080, function() {
  console.log('listening on localhost:8080');
});