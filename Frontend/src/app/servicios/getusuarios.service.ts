import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'//se tiene que importar para que se puesa user el protocolo http(para las consultas)
import { UserInterface } from '../models/user-interface'

import { isNullOrUndefined } from 'util';
import { Router } from "@angular/router";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class GetusuariosService {

  //private URL='http://localhost:3000/'//es el puerto donde se levante todo el backend

  constructor(private http:HttpClient,private router: Router) { }//se intancia el modulo en la clase

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

  //ES PARA OBTENER LA ID DE LA CATEGORIA
  getidcategoria(){
    const url="http://localhost:3000/getidcategoria";
    return this.http.get(url);
  }
  
  //ES PARA OBTENER LOS PRODUCTOS
  getproducto(){
    const url3="http://localhost:3000/getproducto";
    return this.http.get(url3);
  }

  //ES PARA INICIAR SESION
  Login(correo,constrasena){

    const url = "http://localhost:3000/signin";

    return this.http.post(url,
      {
        "CORREO": correo,
        "CONTRASENA": constrasena
      }
      , { headers: this.headers })
      .pipe(map(data => data));

  }

  //GUARDAR EL USUARIO EN EL LOCAL STORAGE
set_currentuser(user:UserInterface){
  let user_string=JSON.stringify(user);//para pasar a string en json
  localStorage.setItem('usuariologeado',user_string);
}


  //PARA RECUREPAR EL USUARIO QUE ESTA EN EL LOCAL STORAGE
get_currentuser(){
  let user_current=localStorage.getItem('usuariologeado');

  if (!isNullOrUndefined(user_current)) {
    let user_json = JSON.parse(user_current);
    return user_json;
  } else {
    return null;
  }


}

  //ES PARA CERRAR SESION
  logout() {
    localStorage.removeItem("usuariologeado");
    this.router.navigate(['/signin']);
  }

}
