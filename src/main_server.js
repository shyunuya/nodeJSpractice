console.log("Hello, World")

var http = require("http");

http.createServer(function (request, response){
    /*
    HTTP Header 전송
    HTTP Status : 200 : OK
    Content Type : text/plain
     */

    response.writeHead(200,{'Content-Type': 'text/plain'});

    /*
        Response Body 를 "Hello, World" 로 설정
     */

    response.end("Hello, fucking World!!\n");
}).listen(9081);

console.log("Server is running at http://127.0.0.1:9081");