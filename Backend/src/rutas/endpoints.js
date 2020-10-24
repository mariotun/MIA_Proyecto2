
const { Router, json } = require('express');
const router = Router();
const BD = require('../configuracion/configurardb');
const validar=require('./validaciones');



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


//INICIAR SESION******************************************************************************************************************
router.get('/signin',async() =>{



})


//CERRAR SESION******************************************************************************************************************
router.get('/signout',async() =>{



})


//REGISTRARSE******************************************************************************************************************
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


//MODIFICAR******************************************************************************************************************
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