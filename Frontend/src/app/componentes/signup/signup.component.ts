import { Component, OnInit } from '@angular/core';
import { RegristrarService } from '../../servicios/regristrar.service'//se importo tambien , es el servicio para usarlo en el componente

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user={//es un objeto
    nombreu:"",
    apellidou:"",
    email:"",
    nacimientou:"",
    paisu:"",
    passwordu:"",
    confpasswordu:"",
    
  }

  constructor(private registrarservice: RegristrarService) { } //instancia de la clase , con esto ya se puede usat 
  //el metodo de signup() para autentificar 

  ngOnInit(): void {
  }

  SignUp(){//metodo de la clase

    this.registrarservice.registrar_usuario(this.user.nombreu,this.user.apellidou,this.user.email,this.user.nacimientou
      ,this.user.paisu,this.user.passwordu,this.user.confpasswordu)
      
      .subscribe(
        res=>{
          console.log(res);
        },
        err =>{
          console.log(err);
        }
      )

    //console.log(this.user)
    //this.user.nombreu=""

    /*this.registrarservice.registrarse(this.user)
    .subscribe(//la respuesta que nos puede devolver el servidor
      
      res =>{
        console.log(res)
      },
      err =>{
        console.log(err)
      }
    )*/
  }

}
