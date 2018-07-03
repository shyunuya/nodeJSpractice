var http = require('http');
var fs = require('fs');
var url = require('url');

//서버 생성

http.createServer(function(request, response){
    //Url 뒤에 있는 디렉토리/파일이름 파싱
    var pathname = url.parse(request.url).pathname;

    console.log("Request for " + pathname + " received.");

    // 파일 이름이 비어 있다면 index.html 로 설정
    if(pathname=="/") {
        pathname = "/index.html";
    }

    // 파일을 읽기

    fs.readFile(pathname.substr(1), function (err, data){
        if (err) {
            console.log(err);
            //페이지를 찾을 수 없음
            //HTTP Status: 404 : NOT FOUND
            //Content-Type: text/plain

            response.writeHead(404, {'Content-Type': 'text/html'});
        } else {
            // 페이지를 찾음
            // HTTP Status: 200 : OK
            // Content Type: text/plain

            response.writeHead(200, {'Content-Type': 'text/plain'});

            // 파일을 안읽어와서 responseBody 에 작성
            response.write(data.toString());
        }
        // ResponseBody 전송
        response.end();
    });
}).listen(9081);

console.log('Server is running at http://127.0.0.1:9081/');