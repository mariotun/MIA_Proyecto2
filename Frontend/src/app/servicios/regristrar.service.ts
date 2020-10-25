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
      "IDCLIENTE":15,
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


 //ES PARA REGISTRAR LOS PRODUCTOS **********************************************************************************
registrar_producto(){

}


//ES PARA REGISTRAR CATEGORIAS **********************************************************************************
registrar_categoria(){

}


 //ES PARA REGISTRAR LAS COMPRAS **********************************************************************************
registrar_compra(){


}


 //ES PARA REGISTRAR LAS VENTAS **********************************************************************************
 registrar_venta(){

  
 }








}
