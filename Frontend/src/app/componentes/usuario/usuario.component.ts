import { Component, OnInit } from '@angular/core';
import { RegristrarService } from 'src/app/servicios/regristrar.service';
import { UserInterface } from '../../models/user-interface'
import { GetusuariosService } from '../../servicios/getusuarios.service'

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  constructor(private crearservice_updateuser: RegristrarService,private cerrarsesion_services:GetusuariosService) { }

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


}
