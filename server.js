var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

io.on('connection', function (socket) {
    setTimeout(function () {
        var time = new Date();
        time.setMinutes(time.getMinutes() + 1);

        socket.emit('alarm', {
            date: time
        });
    }, 5000);
});

server.listen(process.env.PORT || 8080);
