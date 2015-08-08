var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var crypto = require('crypto');

io.on('connection', function (socket) {
    socket.on('createAlarm', function (data) {
        io.emit('alarm', {
            id: crypto.randomBytes(20).toString('hex'),
            date: data.date
        });
    });

    socket.on('deleteAlarm', function (data) {
        io.emit('deleteAlarm', {
            id: data.id
        });
    });
});

server.listen(process.env.PORT || 8080);
