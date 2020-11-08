import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'//se tiene que importar para que se puesa user el protocolo http(para las consultas)
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class RegristrarService {

  //private URL='http://localhost:3000/'//es el puerto donde se levante todo el backend

  constructor(private http:HttpClient) { }//se intancia el modulo en la clase

  headers: HttpHeaders=new HttpHeaders({
    "Content-Type":"application/json"//tipo de dato que se va a estar enviando(json)
  })


  //ES PARA REGISTRAR LOS USUARIOS **********************************************************************************
registrar_usuario(nombre:string,apellido:string,email:string,nacimiento:string,pais:string,password:string,confpasword:string){//hara la peticion al servidor hecho con nodejs
   //return this.http.post<any>('http://localhost:3000/signup',user);//se envia a la BD los datos que trae user
   
   const url="http://localhost:3000/signup";

   return this.http.post(
    url,
    { 
      "IDCLIENTE":null,
      "NOMBRE": nombre,
      "APELLIDO": apellido,
      "CORREO": email,
      "CONTRASENA": password,
      "CCONTRASENA": confpasword,
      "FECHANACIMIENTO": nacimiento,
      "PAIS": pais,
      "CREDITO": 10000,
      "FOTOGRAFIA": "/home/fotos",
      "TIPOUSUARIO": "cliente"
    },
    { headers: this.headers }
  ).pipe(map(data => data));

 }


 //ES PARA ACTUALIZAR LOS DATOS DEL USUARIO***************************************************************************
 actualizar_usuario(id:number,nombre:string,apellido:string,email:string,password:string,confpasword:string,nacimiento:string,pais:string,credito:number,foto:string,tipo:string) {
  const url = "http://localhost:3000/updateuser";

  return this.http.put(
    url,
    {
      "IDCLIENTE":id,
      "NOMBRE": nombre,
      "APELLIDO": apellido,
      "CORREO": email,
      "CONTRASENA": password,
      "CCONTRASENA": confpasword,
      "FECHANACIMIENTO": nacimiento,
      "PAIS": pais,
      "CREDITO": credito,
      "FOTOGRAFIA": foto,
      "TIPOUSUARIO": tipo

    },
    { headers: this.headers }
  ).pipe(map(data => data));
}


 //ES PARA REGISTRAR LOS PRODUCTOS **********************************************************************************
registrar_producto(nombre:string,detalle:string,pclave:string,precio:number,mg:string,nmg:string,idcategoria:number){

  const url3="http://localhost:3000/crearproducto";

  return this.http.post(
    url3,
    { 
      "IDPRODUCTO": null,
      "NOMBRE": nombre,
      "DETALLE": detalle,
      "PALABRASCLAVE": pclave,
      "PRECIO": precio,
      "MEGUSTA": mg,
      "NOMEGUSTA": nmg,
      "IDCATEGORIA": idcategoria
      
    },
    { headers: this.headers }
  ).pipe(map(data => data));

}


//ES PARA REGISTRAR LA PUBLICACION DE UN PRODUCTO
registrar_publicacion(cantidadpu:number,idcliente:number){

  const url4="http://localhost:3000/publicacion";
  var f = new Date();

  return this.http.post(
    url4,
    { 
      "IDPUBLICACION": null,
      "FECHAPUBLICACION": f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear(),
      "CANTIDADPUBLICACION": cantidadpu,
      "ESTADO": "desbloqueado",
      "IDCLIENTE": idcliente
      
    },
    { headers: this.headers }
  ).pipe(map(data => data));


}


//ES PARA REGISTRAR CATEGORIAS **********************************************************************************
registrar_categoria(nombrecategoria:string){

  const url2="http://localhost:3000/crearcategoria";

   return this.http.post(
    url2,
    { 
      "IDCATEGORIA": null,
      "NOMBRECATEGORIA": nombrecategoria
      
    },
    { headers: this.headers }
  ).pipe(map(data => data));



}

//ES PARA REGISTRAR LOS PRODUCTOS DE UN CARRITO **********************************************************************
regsitrar_carrito(idcarrito:number,cantidad:number,precio:number,subtotral:number,producto:string,idcliente:number){

  const url6="http://localhost:3000/carrito";
  

   return this.http.post(
    url6,
    { 
      "IDCARRITO": null,
      "CANTIDAD": cantidad,
      "PRECIOUNITARIO": precio,
      "SUBTOTAL": subtotral,
      "PRODUCTO": producto,
      "IDCLIENTE": idcliente,
      "COMPRO": "no"
      
    },
    { headers: this.headers }
  ).pipe(map(data => data));


}


 //ES PARA REGISTRAR LAS COMPRAS **********************************************************************************
registrar_compra(idcarrito:number){

const url7="http://localhost:3000/compra";
  

   return this.http.post(
    url7,
    { 
      "IDCOMPRA":null,
      "IDCARRITO": idcarrito
      
    },
    { headers: this.headers }
  ).pipe(map(data => data));


}


 //ES PARA REGISTRAR LAS VENTAS **********************************************************************************
 registrar_venta(){

  
 }


 //ES PARA REGISTRAR LA BITACORA*************************************************************************************
registrar_bitacora(descripcion:string,correo:string){

  const url8="http://localhost:3000/bitacora";
  var f = new Date();

   return this.http.post(
    url8,
    { 
      "IDBITACORA": null,
      "DESCRIPCION": descripcion,
      "FECHAACCION": f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear(),
      "CORREO": correo
      
    },
    { headers: this.headers }
  ).pipe(map(data => data));

} 


//ES PARA REGISTRAR LOS COMENTARIOS DE UN PRODUCO **********************************************************************
registrar_comentario(comentario:string,idproducto:number){

  const url9="http://localhost:3000/comentario";
  var f = new Date();

   return this.http.post(
    url9,
    { 
      "IDCOMENTARIO": null,
      "FECHA": f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear(),
      "DESCRIPCION": comentario,
      "IDPRODUCTO": idproducto
      
    },
    { headers: this.headers }
  ).pipe(map(data => data));

}





}
