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

  constructor(private authService: GetusuariosService,private crearservice_updateuser: RegristrarService,private cerrarsesion_services:GetusuariosService,private unicouser_services:GetusuariosService) { }

  user={//es un objeto
    idu:null,
    nombreu:"",
    apellidou:"",
    email:"",
    nacimientou:"",
    paisu:"",
    passwordu:"",
    confpasswordu:"",
    credito:null,
    tipo:"",
    foto:""
    
  }

  Usuarios: UserInterface[] = [];
  
  

  ngOnInit(): void {
    
    let usuariolegeado=this.authService.get_currentuser()
  //  console.log(usuariolegeado);
   // console.log("-->",usuariolegeado.IDCLIENTE)
    
    this.unicouser_services.getoneuser(usuariolegeado.IDCLIENTE).subscribe((res: UserInterface[])=>{
      this.Usuarios=res
      console.log(this.Usuarios)
    })

  }

 
  updateusuario() {
    this.crearservice_updateuser.actualizar_usuario(this.user.idu,this.user.nombreu,this.user.apellidou,this.user.email,this.user.passwordu,this.user.confpasswordu,this.user.nacimientou,this.user.paisu,this.user.credito,this.user.foto,this.user.tipo)
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

colocar_datos(id,nombre,apellido,correo,contrasena,ccontrasena,fecha,pais,credito,foto,tipo){
  this.user.idu=id;
  this.user.nombreu=nombre;
  this.user.apellidou=apellido;
  this.user.email=correo;
  this.user.passwordu=contrasena;
  this.user.confpasswordu=ccontrasena;
  this.user.nacimientou=fecha;
  this.user.paisu=pais;
  this.user.credito=credito;
  this.user.foto=foto;
  this.user.tipo=tipo;
}


}
