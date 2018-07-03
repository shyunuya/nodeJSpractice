var http = require('http');

// HTTPRequest 의 옵션 설정
var options = {
    host: 'localhost',
    port: '9081',
    path: '/index.html'
}

// call back function 으로 response 를 받아온다
var cb = function(response){
    // response 이벤트가 감지되면 데이터를 바디에 받아온다
    var body = '';
    response.on('data',function(data){
        body += data;
    });

    // end 이벤트가 감지되면 데이터 수신을 종료하고 내용을 출력한다
    response.on('end', function(){
        // 데이터 수신 완료
        console.log("Data received completely.\n" + body);
    })
}

var req = http.request(options, cb);
req.end()