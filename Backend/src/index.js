
const express = require('express');
//const morgan = require('morgan');
const cors = require('cors');
const app = express();

//imports
const personRoutes = require('./rutas/endpoints');

//settings
app.set('puerto', 3000);

//middlewares
//app.use(morgan('dev'));
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
app.listen(app.get('puerto'), () => {
    console.log('Server on Port 3000')
})