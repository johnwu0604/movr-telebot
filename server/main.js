var m = require('mraa'); //IO Library
var app = require('express')(); //Express Library
var server = require('http').Server(app); //Create HTTP instance

var io = require('socket.io')(server); //Socket.IO Library

// on values
var isLeftMotorOn = 0;
var isRightMotorOn = 0;

// motors
var myLeftMotor = new m.Gpio(13); //left motor hooked up to digital pin 13
var myRightMotor = new m.Gpio(12); //right motor hooked up to digital pin 12
myLeftMotor.dir(m.DIR_OUT); //set the gpio direction to output
myRightMotor.dir(m.DIR_OUT); //set the gpio direction to output

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html'); //serve the static html file
});

io.on('connection', function(socket){
    socket.on('changeBlinkInterval', function(data){ //on incoming websocket message...
        isLeftMotorOn = data; //update on value
        isRightMotorOn = data; //update on value
    });
});

runMotors();

server.listen(3000); //run on port 3000

runMotors(); //start the blink function

function runMotors(){
    myLeftMotor.write(isLeftMotorOn);
    myRightMotor.write(isRightMotorOn);
    setTimeout(runMotors,isLeftMotorOn); //recursively toggle pin state with timeout set to blink interval
}