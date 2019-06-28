
//创建一个静态资源服务器，访问 http://127.0.0.1:9898/index.html  即可访问nodejs_study文件夹下面的资源

var express = require('express');
var path = require('path');
var request = require('request');
// 配置静态文件服务中间件
// server地址
const app = express();
let serverUrl='http://127.0.0.1:8080';
app.use(express.static(path.join(__dirname, '../nodejs_study/')));
app.use('/', function(req, res) {
  let url = serverUrl + req.url;
  req.pipe(request(url)).pipe(res);
});
app.listen(9898, function () {
  console.log('server is running at port 9898');
});