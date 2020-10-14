import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'//se tiene que importar para que se puesa user el protocolo http
@Injectable({
  providedIn: 'root'
})
export class RegristrarService {

  private URL='http://localhost:3000/'//es el puerto donde se levante todo el backend

  constructor(private http:HttpClient) { }//se intancia la clase

  registrarse(user){//hara la peticion al servidor hecho con nodejs
    return this.http.post<any>(this.URL+'/signup',user);//se envia a la BD los datos que trae user
  }
}
