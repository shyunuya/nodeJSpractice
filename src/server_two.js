var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var fs = require('fs');


//서버가 읽을 수 있도록 HTML 의 위치를 정의해 준다.
app.set('views', __dirname + '/view');

// 서버가 HTML 렌더링을 할 때, EJS 엔진을 사용하도록 설정한다.
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(session({
    secret: '^____^;',
    resave: false,
    saveUninitialized: true
}));

// Router module 인 main.js 를 불러와서 app 에 전달해준다
// bodyPaser 밑에
var router = require('./router/main')(app,fs);


// 서버 시작
var server = app.listen(4000, function(){
    console.log("Express server has started on port 4000");
    console.log("http://localhost:4000")
    console.log(__dirname + '/public/css')

});
