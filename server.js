var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

io.on('connection', function (socket) {
    socket.on('createAlarm', function (data) {
        io.emit('alarm', {
            date: data.date
        });
    });
});

server.listen(process.env.PORT || 8080);
