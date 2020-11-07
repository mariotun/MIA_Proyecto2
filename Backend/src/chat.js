/*
const app = require('express')();
const serverHttp = require('http').Server(app)
const io=require('socket.io')(serverHttp)//va a recibir como parametro la constantete serverHttp

const mismensajes=[];

io.on('connection',function(socket){
    socket.on('send-message',function(data){
        mismensajes.push(data)
        socket.emit('text-event',mismensajes)//solo envia el mensaje para el quien lo pidio
        socket.broadcast.emit('text-event',mismensajes)
        
    })
})
*/