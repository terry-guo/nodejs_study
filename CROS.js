// const http = require("http");
// const option = {
//     host: "localhost",
//     port: 8080,
//     // method: "get",
//     path: "/"
// }
// let httpServer = (response)=>{
// 	//request 是作为nodejs后台用于请求的方法
//     const myreq = http.request(option, res => {
//         let obj = ""; //外部用于保存从8889端口请求的数据
//         console.log(res);
        
//         res.setEncoding("utf8");
//         res.on("data", chunk => {
//             console.log(chunk);
//             obj = chunk
//         })
//         res.on("end", () => {
//             response.end(JSON.stringify(obj)) //将请求的消息发送到传递进来的外部请求对象
//         })
//     })
//     myreq.on("error", err => {
//         console.log(err);
//     })
//     myreq.write("")
//     myreq.end()
// }

// const server = http.createServer((req, res) => {
//     res.writeHead(200, {
//         "Content-Type": "text/html;charset=utf-8",
//         "Access-Control-Allow-Origin": "*"
//     })
//     httpServer(res);//调用请求函数，将本次外部请求的对象传递过去
// }) //require reponse
// server.listen(8889) //创建新的服务8889端口
// console.log('开启了服务');


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