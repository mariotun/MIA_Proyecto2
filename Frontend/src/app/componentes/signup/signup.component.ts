import { Component, OnInit } from '@angular/core';
import { RegristrarService } from '../../servicios/regristrar.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user={
    
  }

  constructor(private registrarservice: RegristrarService) { } //instancia de la clase , con esto ya se puede usat 
  //el metodo se signup() para autentificar 

  ngOnInit(): void {
  }

  SignUp(){
    //console.log(this.user)
    this.registrarservice.registrarse(this.user)
    .subscribe(//la respuesta que nos puede devolver el servidor
      
      res =>{
        console.log(res)
      },
      err =>{
        console.log(err)
      }
    )
  }

}
