
/*class Validacion {

    constructor(){
        console.log("se creo una clase para validaciones.");
    };
}
module.exports= Validacion ;*/

function validar_registro(data){

    const { IDCLIENTE, NOMBRE, APELLIDO, CORREO,CONTRASENA, CCONTRASENA, FECHANACIMIENTO, PAIS, CREDITO ,FOTOGRAFIA ,TIPOUSUARIO } = data;

    if ( typeof IDCLIENTE !=="number"){
        //throw new Error("El ID no es el correcto para ser registrado.");
        return "El ID no es el correcto para ser registrado.";
    }else if ( typeof NOMBRE !== "string" || NOMBRE === "" ){
        //throw new Error("El nombre no es valido para ser registrado.");
        return "El nombre no es valido para ser registrado.";
    }else if(typeof APELLIDO !== "string" || APELLIDO === "" ){
        //throw new Error("El apellido no es valido para ser registrado.");
        return "El apellido no es valido para ser registrado.";
    }else if(typeof CORREO !== "string" || CORREO === ""){
        //throw new Error("El correo electronico no es valido para ser registrado.");
        return "El correo electronico no es valido para ser registrado.";
    }else if(typeof CONTRASENA !== "string" || CONTRASENA === ""){
        //throw new Error("La contrasena no es valido para ser registrado.");
        return "La contrasena no es valido para ser registrado.";
    }else if(typeof CCONTRASENA !== "string" || CCONTRASENA === ""){
        //throw new Error("La constrasena no es valido para ser registrado.");
        return "La constrasena no es valido para ser registrado.";
    }else if(typeof FECHANACIMIENTO !== "string" || FECHANACIMIENTO === ""){
        //throw new Error("La fecha no es valido para ser registrado.");
        return "La fecha no es valido para ser registrado.";
    }else if(typeof PAIS !== "string" || PAIS === ""){
        //throw new Error("El pais no es valido para ser registrado.");
        return "El pais no es valido para ser registrado.";
    }else if(typeof CREDITO !== "number" ){
        //throw new Error("El credito no es valido para ser registrado.");
        return "El credito no es valido para ser registrado.";
    }else if(typeof FOTOGRAFIA !== "string" || FOTOGRAFIA === ""){
        //throw new Error("La fotografia no es valido para ser registrado.");
        return "La fotografia no es valido para ser registrado.";
    }else if(typeof TIPOUSUARIO !== "string" || TIPOUSUARIO === ""){
        //throw new Error("El tipo de usuario no es valido para ser registrado.");
        return "El tipo de usuario no es valido para ser registrado.";
    }

    return ""

}


module.exports={
    validar_registro
};

