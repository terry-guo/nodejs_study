//提供一个接口，访问 http://127.0.0.1:8080  即可访问

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
  console.log('==============');
  console.log('=');
  console.log('listening on localhost:8080');
  console.log('=');
  console.log('==============');
});