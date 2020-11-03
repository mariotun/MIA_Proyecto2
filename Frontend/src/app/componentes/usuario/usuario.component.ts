import { Component, OnInit } from '@angular/core';
import { RegristrarService } from 'src/app/servicios/regristrar.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  constructor(private crearservice_updateuser: RegristrarService) { }

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

  ngOnInit(): void {
  }


  updateusuario() {

  }

}
