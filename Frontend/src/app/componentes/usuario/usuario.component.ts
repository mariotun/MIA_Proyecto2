import { Component, OnInit } from '@angular/core';
//import { ConsoleReporter } from 'jasmine';
import { RegristrarService } from 'src/app/servicios/regristrar.service';
import { UserInterface } from '../../models/user-interface'
import { GetusuariosService } from '../../servicios/getusuarios.service'

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  constructor(private crearservice_updateuser: RegristrarService,private cerrarsesion_services:GetusuariosService,private unicouser_services:GetusuariosService) { }

  user={//es un objeto
    idu:null,
    nombreu:"",
    apellidou:"",
    email:"",
    nacimientou:"",
    paisu:"",
    passwordu:"",
    confpasswordu:"",
    credito:null
    
  }

  Usuarios: UserInterface[] = [];

  ngOnInit(): void {
    
    this.unicouser_services.getoneuser(30).subscribe((res: UserInterface[])=>{
      this.Usuarios=res
      console.log(this.Usuarios)
    })

  }

 
  updateusuario() {
    this.crearservice_updateuser.actualizar_usuario(this.user.idu,this.user.nombreu,this.user.apellidou,this.user.email,this.user.nacimientou,this.user.paisu,this.user.passwordu,this.user.confpasswordu,this.user.credito)
    .subscribe(
      (res: UserInterface[]) => {
        this.Usuarios= res;
        
      },
      err =>{
        console.log(err);
      }
    )

  }


cerrar_sesion(){
  this.cerrarsesion_services.logout();
}



usuario_unico(idcliente){

  this.unicouser_services.getoneuser(idcliente).subscribe((res: UserInterface[])=>{
    this.Usuarios=res
    console.log(this.Usuarios)
  })
  
}

colocar_datos(nombre,apellido,correo,contrasena,ccontrasena,fecha,pais,credito){
  this.user.nombreu=nombre;
  this.user.apellidou=apellido;
  this.user.email=correo;
  this.user.passwordu=contrasena;
  this.user.confpasswordu=ccontrasena;
  this.user.nacimientou=fecha;
  this.user.paisu=pais;
  this.user.credito=credito;
}


}
