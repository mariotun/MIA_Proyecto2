import { Component, OnInit } from '@angular/core';
import { GetusuariosService } from '../../servicios/getusuarios.service'
import { UserInterface } from '../../models/user-interface'
import { Router } from "@angular/router";
import { from } from 'rxjs';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  

  constructor(public login_services:GetusuariosService,public router: Router) { }

  user={//es un objeto
    email:"",
    passwordu:""
    
  }

  ngOnInit(): void {
  }



  login(){
   // console.log(this.user.email,this.user.passwordu);

   this.login_services.Login(this.user.email,this.user.passwordu).subscribe((res) => {
    // console.log(res);
    if (res['msg']) {
      let DataUser: UserInterface = res['DataUser'];
      this.login_services.set_currentuser(DataUser);
      this.router.navigate(['/usuario']);

    } else {
        console.log('Credenciales Incorrectas');
    }
  })



  }

}
