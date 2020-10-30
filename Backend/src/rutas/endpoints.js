
const { Router, json } = require('express');
const router = Router();
const BD = require('../configuracion/configurardb');
const validar=require('./validaciones');


//*************************************************GET_USER*********************************************************************
router.get('/GetUsers', async (req,res)=>{

    consulta="select *from usuario"
   
    let result = await BD.Open(consulta, [], false);
    Users = [];

    //res.json(result.rows);
    //console.log(result.rows);

    result.rows.map(user => {
        let userSchema = {
            "IDCLIENTE": user[0],
            "NOMBRE": user[1],
            "APELLIDO": user[2],
            "CORREO": user[3],
            "CONTRASENA": user[4],
            "CCONTRASENA": user[5],
            "FECHANACIMIENTO": user[6],
            "PAIS": user[7],
            "CREDITO": user[8],
            "FOTOGRAFIA": user[9],
            "TIPOUSUARIO": user[10]
        }

        Users.push(userSchema);
    })

    res.json(Users);
    //res,json(user);

})


//**************************************************SIGN_IN********************************************************************
router.get('/signin',async() =>{



})


//*************************************************SIGN_OUT*******************************************************************
router.get('/signout',async() =>{



})


//*************************************************SIGN_UP********************************************************************
router.post('/signup', async (req, res) =>{

    try{

    let result=validar.validar_registro(req.body);
    
    if ( result !== ""){
       // throw new Error("Los datos no son los correctos para ser registrados.");
       res.status(400).json({
        status:result,
        });
    }else{

    const { IDCLIENTE, NOMBRE, APELLIDO, CORREO,CONTRASENA, CCONTRASENA, FECHANACIMIENTO, PAIS, CREDITO ,FOTOGRAFIA ,TIPOUSUARIO } = req.body;
    //insert into usuario values('1','admim','admin','admin1@gmail.com','admin','admin','30/4/1997','Guatemala','10000','/home/mario','admin')
    sql = "insert into usuario(IDCLIENTE,NOMBRE,APELLIDO,CORREO,CONTRASENA,CCONTRASENA,FECHANACIMIENTO,PAIS,CREDITO,FOTOGRAFIA,TIPOUSUARIO) \
    values (:IDCLIENTE,:NOMBRE,:APELLIDO,:CORREO,:CONTRASENA,:CCONTRASENA,to_date(:FECHANACIMIENTO,'DD-MM-YYYY'),:PAIS,:CREDITO,:FOTOGRAFIA,:TIPOUSUARIO)";

    var respuesta=await BD.Open(sql, [IDCLIENTE, NOMBRE, APELLIDO, CORREO,CONTRASENA, CCONTRASENA, FECHANACIMIENTO, PAIS, CREDITO ,FOTOGRAFIA ,TIPOUSUARIO], true);

    /*res.status(200).json({
        "IDCLIENTE": IDCLIENTE,
        "NOMBRE": NOMBRE,
        "APELLIDO": APELLIDO,
        "CORREO": CORREO,
        "CONTRASENA": CONTRASENA,
        "CCONTRASENA": CCONTRASENA,
        "FECHANACIMIENTO": FECHANACIMIENTO,
        "PAIS": PAIS,
        "CREDITO": CREDITO,
        "FOTOGRAFIA": FOTOGRAFIA,
        "TIPOUSUARIO": TIPOUSUARIO
    })*/

    res.json({
        status:"ok",
    });
    
    }


    }catch(e){
        //console.log('ERROR EN REGISTRAR:',e)
        res.status(400).json({
            status:"Bad",
            message:""+e,
        });
    }


})


//**********************************************UPDATE_USER*******************************************************************
router.put('/updateuser',async(req, res) =>{

    try{

        let result=validar.validar_registro(req.body);
        
        if ( result !== ""){
           // throw new Error("Los datos no son los correctos para ser registrados.");
           res.status(400).json({
            status:result,
            });

        }else{
            //sql = "update person set username=:username, firstname=:firstname, lastname=:lastname where codu=:codu";
        const { IDCLIENTE, NOMBRE, APELLIDO, CORREO,CONTRASENA, CCONTRASENA, FECHANACIMIENTO, PAIS, CREDITO ,FOTOGRAFIA ,TIPOUSUARIO } = req.body;
        
        consulta = "update usuario set NOMBRE=:NOMBRE, APELLIDO=:APELLIDO, CORREO=:CORREO,CONTRASENA=:CONTRASENA ,CCONTRASENA=:CCONTRASENA,\
        FECHANACIMIENTO=to_date(:FECHANACIMIENTO,'DD-MM-YYYY'), PAIS=:PAIS, CREDITO=:CREDITO, FOTOGRAFIA=:FOTOGRAFIA, TIPOUSUARIO=:TIPOUSUARIO where IDCLIENTE=:IDCLIENTE";
    
        await BD.Open(consulta, [ NOMBRE, APELLIDO, CORREO,CONTRASENA, CCONTRASENA, FECHANACIMIENTO, PAIS, CREDITO ,FOTOGRAFIA ,TIPOUSUARIO ,IDCLIENTE], true);
    

        //const { IDCLIENTE }=req.body;
        consulta2="select *from usuario where IDCLIENTE=:IDCLIENTE"
   
        let result2 = await BD.Open(consulta2, [IDCLIENTE], false);
        Users = [];

    //res.json(result.rows);
    //console.log(result.rows);

    result2.rows.map(user => {
        let userSchema = {
            "IDCLIENTE": user[0],
            "NOMBRE": user[1],
            "APELLIDO": user[2],
            "CORREO": user[3],
            "CONTRASENA": user[4],
            "CCONTRASENA": user[5],
            "FECHANACIMIENTO": user[6],
            "PAIS": user[7],
            "CREDITO": user[8],
            "FOTOGRAFIA": user[9],
            "TIPOUSUARIO": user[10]
        }

        Users.push(userSchema);
    })

         res.json(Users);

        /*res.status(200).json({
            "IDCLIENTE": IDCLIENTE,
            "NOMBRE": NOMBRE,
            "APELLIDO": APELLIDO,
            "CORREO": CORREO,
            "CONTRASENA": CONTRASENA,
            "CCONTRASENA": CCONTRASENA,
            "FECHANACIMIENTO": FECHANACIMIENTO,
            "PAIS": PAIS,
            "CREDITO": CREDITO,
            "FOTOGRAFIA": FOTOGRAFIA,
            "TIPOUSUARIO": TIPOUSUARIO
                    })*/
    
        /*res.status(200).json({
            status:"ok",
            message:"Datos modificados correctamente."
        });*/
        
        }
    
    
        }catch(e){
           // console.log('ERROR AL MODIFICAR DATOS DE USUARIO:',e)
            res.status(400).json({
                status:"Bad",
                message:""+e,
            });
        }


})


//***********************************************************************************************************************



//*********************************************CREAR_CATEGORIA***************************************************************
router.post('/crearcategoria', async (req, res) =>{

    try{

    let result=validar.validar_categoria(req.body);
    
    if ( result !== ""){
       // throw new Error("Los datos no son los correctos para ser registrados.");
       res.status(400).json({
        status:result,
        });
    }else{

    const { IDCATEGORIA, NOMBRECATEGORIA } = req.body;
   
    //consulta = "insert into categoria(IDCATEGORIA,NOMBRECATEGORIA) values (:IDCATEGORIA,:NOMBRECATEGORIA)";
    consulta="begin crearcategoria(:IDCATEGORIA,:NOMBRECATEGORIA); end;"

    var respuesta=await BD.Open(consulta, [IDCATEGORIA, NOMBRECATEGORIA], true);

    /*res.status(200).json({
        "IDCLIENTE": IDCLIENTE,
        "NOMBRE": NOMBRE,
        "APELLIDO": APELLIDO,
        "CORREO": CORREO,
        "CONTRASENA": CONTRASENA,
        "CCONTRASENA": CCONTRASENA,
        "FECHANACIMIENTO": FECHANACIMIENTO,
        "PAIS": PAIS,
        "CREDITO": CREDITO,
        "FOTOGRAFIA": FOTOGRAFIA,
        "TIPOUSUARIO": TIPOUSUARIO
    })*/

    res.json({
        status:"ok",
    });
    
    }


    }catch(e){
        //console.log('ERROR EN REGISTRAR:',e)
        res.status(400).json({
            status:"Bad",
            message:""+e,
        });
    }


})


//***********************************************GET_CATEGORIA************************************************************************
router.get('/getcategoria', async (req,res)=>{

    consulta="select *from categoria"
   
    let result = await BD.Open(consulta, [], false);
    Users = [];

    //res.json(result.rows);
    //console.log(result.rows);

    result.rows.map(user => {
        let userSchema = {
            "IDCATEGORIA": user[0],
            "NOMBRECATEGORIA": user[1]
        }

        Users.push(userSchema);
    })

    res.json(Users);
    //res,json(user);

})


//***********************************************CREAR_PRODUCTO******************************************************************
router.post('/crearproducto', async (req, res) =>{

    try{

    let result=validar.validar_producto(req.body);
    
    if ( result !== ""){
       // throw new Error("Los datos no son los correctos para ser registrados.");
       res.status(400).json({
        status:result,
        });
    }else{

    const { IDPRODUCTO, NOMBRE, DETALLE, PALABRASCLAVE,PRECIO, MEGUSTA, NOMEGUSTA, IDCATEGORIA } = req.body;
   
    //consulta = "insert into categoria(IDCATEGORIA,NOMBRECATEGORIA) values (:IDCATEGORIA,:NOMBRECATEGORIA)";
    consulta="insert into producto(IDPRODUCTO,NOMBRE,DETALLE,PALABRASCLAVE,PRECIO,MEGUSTA,NOMEGUSTA,IDCATEGORIA) \
     values (:IDPRODUCTO,:NOMBRE,:DETALLE,:PALABRASCLAVE,:PRECIO,:MEGUSTA,:NOMEGUSTA,:IDCATEGORIA)"

    var respuesta=await BD.Open(consulta, [ IDPRODUCTO, NOMBRE, DETALLE, PALABRASCLAVE,PRECIO, MEGUSTA, NOMEGUSTA, IDCATEGORIA ], true);

    /*res.status(200).json({
        "IDCLIENTE": IDCLIENTE,
        "NOMBRE": NOMBRE,
        "APELLIDO": APELLIDO,
        "CORREO": CORREO,
        "CONTRASENA": CONTRASENA,
        "CCONTRASENA": CCONTRASENA,
        "FECHANACIMIENTO": FECHANACIMIENTO,
        "PAIS": PAIS,
        "CREDITO": CREDITO,
        "FOTOGRAFIA": FOTOGRAFIA,
        "TIPOUSUARIO": TIPOUSUARIO
    })*/

    res.json({
        status:"ok",
    });
    
    }


    }catch(e){
        //console.log('ERROR EN REGISTRAR:',e)
        res.status(400).json({
            status:"Bad",
            message:""+e,
        });
    }


})


//**********************************************GET_PRODUCTO*********************************************************************
router.get('/getproducto', async (req,res)=>{

    consulta="select *from producto"
   
    let result = await BD.Open(consulta, [], false);
    Productos = [];

    //res.json(result.rows);
    //console.log(result.rows);

    result.rows.map(producto => {
        let productoSchema = {
            "IDPRODUCTO": producto [0],
            "NOMBRE": producto [1],
            "DETALLE": producto [2],
            "PALABRASCLAVE": producto [3],
            "PRECIO": producto [4],
            "MEGUSTA": producto [5],
            "NOMEGUSTA": producto [6],
            "IDCATEGORIA": producto [7]
        }

        Productos.push(productoSchema);
    })

    res.json(Productos);
    //res,json(user);

})


//*************************************************CARRITO*******************************************************************
router.post('/carrito', async (req, res) =>{

    try{

    let result=validar.validar_carrito(req.body);
    
    if ( result !== ""){
       // throw new Error("Los datos no son los correctos para ser registrados.");
       res.status(400).json({
        status:result,
        });
    }else{

    const { IDCARRITO, CANTIDAD, PRECIOUNITARIO, SUBTOTAL,PRODUCTO, IDCLIENTE,COMPRO } = req.body;
   
    //consulta = "insert into categoria(IDCATEGORIA,NOMBRECATEGORIA) values (:IDCATEGORIA,:NOMBRECATEGORIA)";
    consulta="insert into carrito(IDCARRITO, CANTIDAD, PRECIOUNITARIO, SUBTOTAL,PRODUCTO, IDCLIENTE,COMPRO) \
     values (:IDCARRITO, :CANTIDAD, :PRECIOUNITARIO, :SUBTOTAL, :PRODUCTO, :IDCLIENTE, :COMPRO)"

    var respuesta=await BD.Open(consulta, [ IDCARRITO, CANTIDAD, PRECIOUNITARIO, SUBTOTAL,PRODUCTO, IDCLIENTE,COMPRO ], true);

    /*res.status(200).json({
        "IDCLIENTE": IDCLIENTE,
        "NOMBRE": NOMBRE,
        "APELLIDO": APELLIDO,
        "CORREO": CORREO,
        "CONTRASENA": CONTRASENA,
        "CCONTRASENA": CCONTRASENA,
        "FECHANACIMIENTO": FECHANACIMIENTO,
        "PAIS": PAIS,
        "CREDITO": CREDITO,
        "FOTOGRAFIA": FOTOGRAFIA,
        "TIPOUSUARIO": TIPOUSUARIO
    })*/

    res.json({
        status:"ok",
    });
    
    }


    }catch(e){
        //console.log('ERROR EN REGISTRAR:',e)
        res.status(400).json({
            status:"Bad",
            message:""+e,
        });
    }


})

//********************************************UPDATE_CARRITO********************************************************************

//********************************************GET_CARRITO***********************************************************************
router.get('/getcarrito', async (req,res)=>{

    consulta="select *from carrito"
   
    let result = await BD.Open(consulta, [], false);
    Carritos = [];

    //res.json(result.rows);
    //console.log(result.rows);

    result.rows.map(carrito => {
        let carritoSchema = {
            "IDCARRITO": carrito [0],
            "CANTIDAD": carrito[1],
            "PRECIOUNITARIO": carrito [2],
            "SUBTOTAL": carrito [3],
            "PRODUCTO": carrito [4],
            "IDCLIENTE": carrito [5],
            "COMPRO": carrito [6]
        }

        Carritos.push(carritoSchema);
    })

    res.json(Carritos);
    //res,json(user);

})


//***************************************************COMPRA*******************************************************************
router.post('/compra', async (req, res) =>{

    try{

   /* let result=validar.validar_carrito(req.body);
    
    if ( result !== ""){
       // throw new Error("Los datos no son los correctos para ser registrados.");
       res.status(400).json({
        status:result,
        });
    }else{*/

    const { IDCOMPRA, IDCARRITO} = req.body;
   
    //consulta = "insert into categoria(IDCATEGORIA,NOMBRECATEGORIA) values (:IDCATEGORIA,:NOMBRECATEGORIA)";
    consulta="insert into compra(IDCOMPRA, IDCARRITO) \
     values (:IDCOMPRA, :IDCARRITO)"

    var respuesta=await BD.Open(consulta, [ IDCOMPRA, IDCARRITO ], true);


    res.json({
        status:"ok",
    });
    
    //}


    }catch(e){
        //console.log('ERROR EN REGISTRAR:',e)
        res.status(400).json({
            status:"Bad",
            message:""+e,
        });
    }


})



//*******************************************DETALLE_COMPRA****************************************************************************
router.post('/detallecompra', async (req, res) =>{

    try{

    let result=validar.validar_dcompra(req.body);
    
    if ( result !== ""){
       // throw new Error("Los datos no son los correctos para ser registrados.");
       res.status(400).json({
        status:result,
        });
    }else{

    const { IDDETALLECOMPRA, CANTIDADCOMPRA, TOTALCOMPRA, IDCOMPRA,IDPRODUCTO} = req.body;
   
    //consulta = "insert into categoria(IDCATEGORIA,NOMBRECATEGORIA) values (:IDCATEGORIA,:NOMBRECATEGORIA)";
    consulta="insert into detallecompra(IDDETALLECOMPRA, CANTIDADCOMPRA, TOTALCOMPRA, IDCOMPRA,IDPRODUCTO) \
     values (:IDDETALLECOMPRA, :CANTIDADCOMPRA, :TOTALCOMPRA, :IDCOMPRA, :IDPRODUCTO)"

    var respuesta=await BD.Open(consulta, [ IDDETALLECOMPRA, CANTIDADCOMPRA, TOTALCOMPRA, IDCOMPRA,IDPRODUCTO ], true);

    /*res.status(200).json({
        "IDCLIENTE": IDCLIENTE,
        "NOMBRE": NOMBRE,
        "APELLIDO": APELLIDO,
        "CORREO": CORREO,
        "CONTRASENA": CONTRASENA,
        "CCONTRASENA": CCONTRASENA,
        "FECHANACIMIENTO": FECHANACIMIENTO,
        "PAIS": PAIS,
        "CREDITO": CREDITO,
        "FOTOGRAFIA": FOTOGRAFIA,
        "TIPOUSUARIO": TIPOUSUARIO
    })*/

    res.json({
        status:"ok",
    });
    
    }


    }catch(e){
        //console.log('ERROR EN REGISTRAR:',e)
        res.status(400).json({
            status:"Bad",
            message:""+e,
        });
    }


})


//**********************************************COMENTARIO*******************************************************************
router.post('/comentario', async (req, res) =>{

    try{

    let result=validar.validar_comentario(req.body);
    
    if ( result !== ""){
       // throw new Error("Los datos no son los correctos para ser registrados.");
       res.status(400).json({
        status:result,
        });
    }else{

    const { IDCOMENTARIO, FECHA, DESCRIPCION, IDPRODUCTO } = req.body;
   
    //consulta = "insert into categoria(IDCATEGORIA,NOMBRECATEGORIA) values (:IDCATEGORIA,:NOMBRECATEGORIA)";
    consulta="insert into comentario(IDCOMENTARIO, FECHA, DESCRIPCION, IDPRODUCTO) \
     values (:IDCOMENTARIO, to_date(:FECHA,'DD-MM-YYYY'), :DESCRIPCION, :IDPRODUCTO)"

    var respuesta=await BD.Open(consulta, [ IDCOMENTARIO, FECHA, DESCRIPCION, IDPRODUCTO ], true);

    /*res.status(200).json({
        "IDCLIENTE": IDCLIENTE,
        "NOMBRE": NOMBRE,
        "APELLIDO": APELLIDO,
        "CORREO": CORREO,
        "CONTRASENA": CONTRASENA,
        "CCONTRASENA": CCONTRASENA,
        "FECHANACIMIENTO": FECHANACIMIENTO,
        "PAIS": PAIS,
        "CREDITO": CREDITO,
        "FOTOGRAFIA": FOTOGRAFIA,
        "TIPOUSUARIO": TIPOUSUARIO
    })*/

    res.json({
        status:"ok",
    });
    
    }


    }catch(e){
        //console.log('ERROR EN REGISTRAR:',e)
        res.status(400).json({
            status:"Bad",
            message:""+e,
        });
    }


})

//*********************************************GET_COMENTARIO******************************************************************
router.get('/getcomentario', async (req,res)=>{

    consulta="select *from comentario"
   
    let result = await BD.Open(consulta, [], false);
    Comentarios = [];

    //res.json(result.rows);
    //console.log(result.rows);

    result.rows.map(comentario => {
        let comentarioSchema = {
            "IDCOMENTARIO": comentario [0],
            "FECHA": comentario[1],
            "DESCRIPCION": comentario [2],
            "IDPRODUCTO": comentario [3]
        }

        Comentarios.push(comentarioSchema);
    })

    res.json(Comentarios);
    //res,json(user);

})

//**********************************************PUBLICACION*****************************************************************
router.post('/publicacion', async (req, res) =>{

    try{

    let result=validar.validar_publicacion(req.body);
    
    if ( result !== ""){
       // throw new Error("Los datos no son los correctos para ser registrados.");
       res.status(400).json({
        status:result,
        });
    }else{

    const { IDPUBLICACION, FECHAPUBLICACION, CANTIDADPUBLICACION, ESTADO, IDCLIENTE } = req.body;
   
    //consulta = "insert into categoria(IDCATEGORIA,NOMBRECATEGORIA) values (:IDCATEGORIA,:NOMBRECATEGORIA)";
    consulta="insert into publicacion(IDPUBLICACION, FECHAPUBLICACION, CANTIDADPUBLICACION, ESTADO, IDCLIENTE) \
     values (:IDPUBLICACION, to_date(:FECHAPUBLICACION,'DD-MM-YYYY'), :CANTIDADPUBLICACION, :ESTADO, :IDCLIENTE)"

    var respuesta=await BD.Open(consulta, [ IDPUBLICACION, FECHAPUBLICACION, CANTIDADPUBLICACION, ESTADO, IDCLIENTE ], true);

    /*res.status(200).json({
        "IDCLIENTE": IDCLIENTE,
        "NOMBRE": NOMBRE,
        "APELLIDO": APELLIDO,
        "CORREO": CORREO,
        "CONTRASENA": CONTRASENA,
        "CCONTRASENA": CCONTRASENA,
        "FECHANACIMIENTO": FECHANACIMIENTO,
        "PAIS": PAIS,
        "CREDITO": CREDITO,
        "FOTOGRAFIA": FOTOGRAFIA,
        "TIPOUSUARIO": TIPOUSUARIO
    })*/

    res.json({
        status:"ok",
    });
    
    }


    }catch(e){
        //console.log('ERROR EN REGISTRAR:',e)
        res.status(400).json({
            status:"Bad",
            message:""+e,
        });
    }


})

//*************************************************GET_PUBLICACION**********************************************************
router.get('/getpublicacion', async (req,res)=>{

    consulta="select *from publicacion"
   
    let result = await BD.Open(consulta, [], false);
    Publicaciones = [];

    //res.json(result.rows);
    //console.log(result.rows);

    result.rows.map(publicacion => {
        let publicacionSchema = {
            "IDPUBLICACION": publicacion [0],
            "FECHAPUBLICACION": publicacion[1],
            "CANTIDADPUBLICACION": publicacion [2],
            "ESTADO": publicacion [3],
            "IDCLIENTE":publicacion[4]
        }

        Publicaciones.push(publicacionSchema);
    })

    res.json(Publicaciones);
    //res,json(user);

})

//*********************************************DENUNCIA**************************************************************************
router.post('/denuncia', async (req, res) =>{

    try{

    let result=validar.validar_denuncia(req.body);
    
    if ( result !== ""){
       // throw new Error("Los datos no son los correctos para ser registrados.");
       res.status(400).json({
        status:result,
        });
    }else{

    const { IDDENUNCIA, FECHADENUNCIA, DESCRIPCION ,CANTIDAD, IDPUBLICACION } = req.body;
   
    //consulta = "insert into categoria(IDCATEGORIA,NOMBRECATEGORIA) values (:IDCATEGORIA,:NOMBRECATEGORIA)";
    consulta="insert into denuncia(IDDENUNCIA, FECHADENUNCIA, DESCRIPCION ,CANTIDAD, IDPUBLICACION) \
     values (:IDDENUNCIA, to_date(:FECHADENUNCIA,'DD-MM-YYYY'), :DESCRIPCION , :CANTIDAD, :IDPUBLICACION)"

    var respuesta=await BD.Open(consulta, [ IDDENUNCIA, FECHADENUNCIA, DESCRIPCION ,CANTIDAD, IDPUBLICACION ], true);

    /*res.status(200).json({
        "IDCLIENTE": IDCLIENTE,
        "NOMBRE": NOMBRE,
        "APELLIDO": APELLIDO,
        "CORREO": CORREO,
        "CONTRASENA": CONTRASENA,
        "CCONTRASENA": CCONTRASENA,
        "FECHANACIMIENTO": FECHANACIMIENTO,
        "PAIS": PAIS,
        "CREDITO": CREDITO,
        "FOTOGRAFIA": FOTOGRAFIA,
        "TIPOUSUARIO": TIPOUSUARIO
    })*/

    res.json({
        status:"ok",
    });
    
    }


    }catch(e){
        //console.log('ERROR EN REGISTRAR:',e)
        res.status(400).json({
            status:"Bad",
            message:""+e,
        });
    }


})

//*********************************************GET_DENUNCIA*********************************************************************
router.get('/getdenuncia', async (req,res)=>{

    consulta="select *from denuncia"
   
    let result = await BD.Open(consulta, [], false);
    Denuncias = [];

    //res.json(result.rows);
    //console.log(result.rows);

    result.rows.map(denuncia => {
        let denunciaSchema = {
            "IDDENUNCIA": denuncia [0],
            "FECHADENUNCIA": denuncia[1],
            "DESCRIPCION": denuncia [2],
            "CANTIDAD": denuncia [3],
            "IDPUBLICACION":denuncia[4]
        }

        Denuncias.push(denunciaSchema);
    })

    res.json(Denuncias);
    //res,json(user);

})

//***********************************************************************************************************************


//***********************************************************************************************************************



//READ
router.get('/getUsers', async (req, res) => {
    sql = "select * from person where state=1";

    let result = await BD.Open(sql, [], false);
    Users = [];

    result.rows.map(user => {
        let userSchema = {
            "codu": user[0],
            "username": user[1],
            "firstname": user[2],
            "lastname": user[3]
        }

        Users.push(userSchema);
    })

    res.json(Users);
})



//CREATE
router.post('/addUser', async (req, res) => {
    const { username, firstname, lastname } = req.body;

    sql = "insert into person(username,firstname,lastname) values (:username,:firstname,:lastname)";

    await BD.Open(sql, [username, firstname, lastname], true);

    res.status(200).json({
        "username": username,
        "firstname": firstname,
        "lastname": lastname
    })
})

//UPDATE
router.put("/updateUser", async (req, res) => {
    const { codu, username, firstname, lastname } = req.body;

    sql = "update person set username=:username, firstname=:firstname, lastname=:lastname where codu=:codu";

    await BD.Open(sql, [username, firstname, lastname,codu], true);

    res.status(200).json({
        "codu": codu,
        "username": username,
        "firstname": firstname,
        "lastname": lastname
    })

})


//DELETE
router.delete("/deleteUser/:codu", async (req, res) => {
    const { codu } = req.params;

    sql = "update person set state=0 where codu=:codu";

    await BD.Open(sql, [codu], true);

    res.json({ "msg": "Usuario Eliminado" })

    //res.status(400).json({ "msg": "Usuario Eliminado" })
})


module.exports = router;