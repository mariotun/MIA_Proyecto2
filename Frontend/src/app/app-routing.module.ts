import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';

//componentes creados para el proyecto
import {SigninComponent } from './componentes/signin/signin.component'//para entrar a la cuenta
import {SignoutComponent} from './componentes/signout/signout.component'//para salir de la cuenta
import {SignupComponent} from './componentes/signup/signup.component'//para registrarse y obtener una cuenta 


const routes: Routes = [

  
  {
    path:'signin',
    component:SigninComponent

  },
  {
    path:'signout',
    component:SignoutComponent

  },
  {
    path:'signup',
    component:SignupComponent

  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
