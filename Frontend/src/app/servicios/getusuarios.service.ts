import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'//se tiene que importar para que se puesa user el protocolo http(para las consultas)

@Injectable({
  providedIn: 'root'
})
export class GetusuariosService {

  //private URL='http://localhost:3000/'//es el puerto donde se levante todo el backend

  constructor(private http:HttpClient) { }//se intancia el modulo en la clase

  headers: HttpHeaders=new HttpHeaders({
    "Content-Type":"application/json"//tipo de dato que se va a estar enviando(json)
  })


  //ES PARA OBTENER LOS USUARIOS
  getuser(){
    const url="http://localhost:3000/GetUsers";
    return this.http.get(url);
  }

  //ES PARA ACTUALIZAR LOS DATOS DEL USUARIO


  //ES PARA OBTENER LAS CATEGORIAS
  getcategoria(){
    const url2="http://localhost:3000/getcategoria";
    return this.http.get(url2);
  }


}
