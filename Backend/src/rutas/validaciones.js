
//const yup = require('yup');
/*class Validacion {

    constructor(){
        console.log("se creo una clase para validaciones.");
    };
}
module.exports= Validacion ;*/

function validar_login(data){
    
    //   const schema=yup.object().shape({ });
   
    const { CORREO,CONTRASENA } = data;
   
    if( typeof CORREO !== "string" || CORREO !== "" ){
       return "El correo no es valido.";
   
    }else if( typeof CONTRASENA !== "string" || CONTRASENA !== "" ){
       return "La contraseña no es valido.";
    }
   
    return "";
   
   }
// ***********************************************************************************************************************

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

    return "";

}

// ***********************************************************************************************************************


function validar_modificar_usuario(data){

    const { IDCLIENTE, NOMBRE, APELLIDO, CORREO,CONTRASENA, CCONTRASENA, FECHANACIMIENTO, PAIS, CREDITO ,FOTOGRAFIA ,TIPOUSUARIO } = data;

   

}

// ***********************************************************************************************************************
function validar_categoria(data){

    const { IDCATEGORIA, NOMBRECATEGORIA} = data;

    if ( typeof IDCATEGORIA !=="number"){
        return "El ID de la categoria no es el correcto para ser registrado.";

    }else if(typeof NOMBRECATEGORIA !== "string" || NOMBRECATEGORIA === ""){
        return "El nombre de la categoria no es valido para ser registrado.";
    }

    return "";

}


// ***********************************************************************************************************************
function validar_producto(data){

    const { IDPRODUCTO, NOMBRE, DETALLE, PALABRASCLAVE,PRECIO, MEGUSTA, NOMEGUSTA, IDCATEGORIA} = data;

    if ( typeof IDPRODUCTO !=="number"){
        //throw new Error("El ID no es el correcto para ser registrado.");
        return "El ID del producto no es el correcto para ser registrado.";
    }else if ( typeof NOMBRE !== "string" || NOMBRE === "" ){
        //throw new Error("El nombre no es valido para ser registrado.");
        return "El nombre no es valido para ser registrado.";
    }else if(typeof DETALLE !== "string" || DETALLE === "" ){
        //throw new Error("El apellido no es valido para ser registrado.");
        return "El detalle no es valido para ser registrado.";
    }else if(typeof PALABRASCLAVE !== "string" || PALABRASCLAVE === ""){
        //throw new Error("El correo electronico no es valido para ser registrado.");
        return "Las palabras claves no son validos para ser registrados.";
    }else if( typeof PRECIO !== "number" || PRECIO === null || PRECIO <= 0 ){
        //throw new Error("La contrasena no es valido para ser registrado.");
        return "El precio no es valido para ser registrado.";
    }else if(typeof MEGUSTA !== "string"){
        //throw new Error("La constrasena no es valido para ser registrado.");
        return "El like no es valido para ser registrado.";
    }else if(typeof NOMEGUSTA !== "string"){
        //throw new Error("La fecha no es valido para ser registrado.");
        return "El dislike no es valido para ser registrado.";
    }else if(typeof IDCATEGORIA !== "number"){
        //throw new Error("El pais no es valido para ser registrado.");
        return "El ID de la categoria no es valido para ser registrado.";
    }

    return "";

}


// ***********************************************************************************************************************
function validar_carrito(data){

    const { IDCARRITO, CANTIDAD, PRECIOUNITARIO, SUBTOTAL,PRODUCTO, IDCLIENTE,COMPRO} = data;

    if ( typeof IDCARRITO !=="number"){
        //throw new Error("El ID no es el correcto para ser registrado.");
        return "El ID del carrito no es el correcto para ser registrado.";
    }else if ( typeof CANTIDAD !== "number" || CANTIDAD === null || CANTIDAD <= 0 ){
        //throw new Error("El nombre no es valido para ser registrado.");
        return "La cantidad no es valida para ser registrado.";
    }else if(typeof PRECIOUNITARIO !== "number" || PRECIOUNITARIO === null ){
        //throw new Error("El apellido no es valido para ser registrado.");
        return "El precio unitario no es valido para ser registrado.";
    }else if(typeof SUBTOTAL !== "number" || SUBTOTAL === null){
        //throw new Error("El correo electronico no es valido para ser registrado.");
        return "El subtotal no es valido para ser registrados.";
    }else if( typeof PRODUCTO !== "string" || PRODUCTO === "" ){
        //throw new Error("La contrasena no es valido para ser registrado.");
        return "El producto no es valido para ser registrado.";
    }else if(typeof IDCLIENTE !== "number" ){
        //throw new Error("La constrasena no es valido para ser registrado.");
        return "El id del cliente no es valido para ser registrado.";
    }else if( typeof COMPRO !== "string" || COMPRO === "" ){
        //throw new Error("La contrasena no es valido para ser registrado.");
        return "El estado compro no es valido para ser registrado.";
    }

    return "";

}

// ***********************************************************************************************************************
function validar_dcompra(data){

    const {  IDDETALLECOMPRA, CANTIDADCOMPRA, TOTALCOMPRA, IDCOMPRA,IDPRODUCTO} = data;

    if ( typeof IDDETALLECOMPRA !=="number"){
        //throw new Error("El ID no es el correcto para ser registrado.");
        return "El ID del detalle de compra no es el correcto para ser registrado.";
    }else if ( typeof CANTIDADCOMPRA !== "number" || CANTIDADCOMPRA === null || CANTIDADCOMPRA <= 0 ){
        //throw new Error("El nombre no es valido para ser registrado.");
        return "La cantidad de la compra no es valida para ser registrado.";
    }else if(typeof TOTALCOMPRA !== "number" || TOTALCOMPRA === null || TOTALCOMPRA <= 0 ){
        //throw new Error("El apellido no es valido para ser registrado.");
        return "El total de la compra no es valido para ser registrado.";
    }else if(typeof IDCOMPRA !== "number" ){
        //throw new Error("El correo electronico no es valido para ser registrado.");
        return "El id de la compra no es valido para ser registrados.";
    }else if( typeof IDPRODUCTO !== "number" ){
        //throw new Error("La contrasena no es valido para ser registrado.");
        return "El id del producto no es valido para ser registrado.";
    }

    return "";

}

// ***********************************************************************************************************************
function validar_comentario(data){

    const {  IDCOMENTARIO, FECHA, DESCRIPCION, IDPRODUCTO} = data;

    if ( typeof IDCOMENTARIO !=="number"){
        //throw new Error("El ID no es el correcto para ser registrado.");
        return "El ID del comentario no es el correcto para ser registrado.";
    }else if ( typeof FECHA !== "string" || FECHA=== ""){
        //throw new Error("El nombre no es valido para ser registrado.");
        return "La fecha no es valida para ser registrado.";
    }else if(typeof DESCRIPCION !== "string" || DESCRIPCION === ""){
        //throw new Error("El apellido no es valido para ser registrado.");
        return "La descripcion no es valido para ser registrado.";
    }else if( typeof IDPRODUCTO !== "number" ){
        //throw new Error("La contrasena no es valido para ser registrado.");
        return "El id del producto no es valido para ser registrado.";
    }

    return "";

}

// ***********************************************************************************************************************
function validar_publicacion(data){

    const {  IDPUBLICACION, FECHAPUBLICACION, CANTIDADPUBLICACION, ESTADO, IDCLIENTE} = data;

    if ( typeof IDPUBLICACION !=="number"){
        //throw new Error("El ID no es el correcto para ser registrado.");
        return "El ID de la publicacion no es el correcto para ser registrado.";
    }else if ( typeof FECHAPUBLICACION !== "string" || FECHAPUBLICACION=== ""){
        //throw new Error("El nombre no es valido para ser registrado.");
        return "La fecha de la publicacion no es valida para ser registrado.";
    }else if(typeof CANTIDADPUBLICACION !== "number" || CANTIDADPUBLICACION === null){
        //throw new Error("El apellido no es valido para ser registrado.");
        return "La cantidad de publicaciones no es valido para ser registrado.";
    }else if( typeof ESTADO !== "string" || ESTADO ==="" ){
        //throw new Error("La contrasena no es valido para ser registrado.");
        return "El estado de la publicacion no es valido para ser registrado.";
    }else if( typeof IDCLIENTE !== "number" ){
        //throw new Error("La contrasena no es valido para ser registrado.");
        return "El id del cliente no es valido para ser registrado.";
    }

    return "";

}

// ***********************************************************************************************************************
function validar_denuncia(data){

    const {  IDDENUNCIA, FECHADENUNCIA, DESCRIPCION ,CANTIDAD, IDPUBLICACION} = data;

    if ( typeof IDDENUNCIA !=="number"){
        //throw new Error("El ID no es el correcto para ser registrado.");
        return "El ID de la denuncia no es el correcto para ser registrado.";
    }else if ( typeof FECHADENUNCIA !== "string" || FECHADENUNCIA=== ""){
        //throw new Error("El nombre no es valido para ser registrado.");
        return "La fecha de la denucia no es valida para ser registrado.";
    }else if(typeof DESCRIPCION !== "string" || DESCRIPCION === ""){
        //throw new Error("El apellido no es valido para ser registrado.");
        return "La descripcion no es valida para ser registrado.";
    }else if( typeof CANTIDAD !== "number" || CANTIDAD === null){
        //throw new Error("La contrasena no es valido para ser registrado.");
        return "La cantidad no es valida para ser registrado.";
    }else if( typeof IDPUBLICACION !== "number" ){
        //throw new Error("La contrasena no es valido para ser registrado.");
        return "El id de la publicacion no es valido para ser registrado.";
    }

    return "";

}

// ***********************************************************************************************************************
function validar_detalleventa(data){

    const {  IDDETALLEVENTA, CANTIDADVENTA, TOTALVENTA , IDVENTA, IDPRODUCTO} = data;

    if ( typeof IDDETALLEVENTA !=="number"){
        //throw new Error("El ID no es el correcto para ser registrado.");
        return "El ID del detalle de venta no es el correcto para ser registrado.";
    }else if ( typeof CANTIDADVENTA !== "number" || CANTIDADVENTA===null){
        //throw new Error("El nombre no es valido para ser registrado.");
        return "La cantidad de venta no es valida para ser registrado.";
    }else if(typeof TOTALVENTA !== "number" || TOTALVENTA === null){
        //throw new Error("El apellido no es valido para ser registrado.");
        return "El total de la venta no es valida para ser registrado.";
    }else if( typeof IDVENTA !== "number" ){
        //throw new Error("La contrasena no es valido para ser registrado.");
        return "El id de la venta no es valida para ser registrado.";
    }else if( typeof IDPRODUCTO !== "number" ){
        //throw new Error("La contrasena no es valido para ser registrado.");
        return "El id del producto no es valido para ser registrado.";
    }

    return "";

}

// ***********************************************************************************************************************
function validar_bitacora(data){

    const {  IDBITACORA, DESCRIPCION, FECHAACCION , CORREO} = data;

    if ( typeof IDBITACORA !=="number"){
        //throw new Error("El ID no es el correcto para ser registrado.");
        return "El ID de la bitacora no es el correcto para ser registrado.";
    }else if ( typeof DESCRIPCION !== "string" || DESCRIPCION==="" ){
        //throw new Error("El nombre no es valido para ser registrado.");
        return "La descripcion para la bitacora no es valida para ser registrado.";
    }else if(typeof FECHAACCION !== "string" || FECHAACCION === "" ){
        //throw new Error("El apellido no es valido para ser registrado.");
        return "La fecha no es valida para ser registrado.";
    }else if( typeof CORREO !== "string" || CORREO ==="" ){
        //throw new Error("La contrasena no es valido para ser registrado.");
        return "El correo del cliente no es valida para ser registrado.";
    }

    return "";

}



// ***********************************************************************************************************************

module.exports={
    validar_registro,
    validar_login,
    validar_categoria,
    validar_producto,
    validar_carrito,
    validar_dcompra,
    validar_comentario,
    validar_publicacion,
    validar_denuncia,
    validar_detalleventa,
    validar_bitacora
};

