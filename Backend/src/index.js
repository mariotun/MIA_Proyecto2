
const express = require('express');
//const morgan = require('morgan');
const cors = require('cors');
const app = express();


const serverHttp=require('http').Server(app)
const io=require('socket.io')(serverHttp)//va a recibir como parametro la constantete serverHttp
const myMessages=[];
io.on('connection',function(socket){
    socket.on('send-message',function(data){
        myMessages.push(data)
        socket.emit('text-event',myMessages)//solo envia el mensaje para el quien lo pidio
        socket.broadcast.emit('text-event',myMessages)  
    })
})





//imports
const personRoutes = require('./rutas/endpoints');

//settings
app.set('puerto', 3000);

//middlewares
//app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



//routes
app.use(personRoutes);


/*app.use((error,req,res,next) =>{//es para los errores en la validaciones
    res.status(400).json({
        status:"error",
        message: error.message,

    });
});*/


//run

serverHttp.listen(app.get('puerto'), () => {
    console.log('Server on Port 3000')
})