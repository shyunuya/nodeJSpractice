var fs = require("fs");
var events = require('events');



// var data = fs.readFileSync('/Users/supercom-exem/projectEd/nodePractice/input.text');

// console.log(data.toString());

fs.readFile('/Users/supercom-exem/projectEd/nodePractice/input.text', function (err, data){
    if (err) return console.error(err);
    console.log(data.toString());
});


var eventEmitter = new events.EventEmitter();

var eventHandler = function connected() {
    console.log("Connection OK");

    //data_recevied 이벤트 발생시키기
    eventEmitter.emit("data_received");
}

eventEmitter.on('connection', eventHandler);

// data_received 이벤트와 익명 함수와 연동
// 함수를 변수안에 담는 대신에, .on() 메소드의 인자로 직접 함수를 전달
eventEmitter.on('data_received', function () {
    console.log("Data Received");
});

// connection 이벤트 발생시키기
eventEmitter.emit('connection');

console.log("Program has ended")
