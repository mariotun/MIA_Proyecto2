import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';

//componentes creados para el proyecto
import {SigninComponent } from './componentes/signin/signin.component'//para entrar a la cuenta
import {SignoutComponent} from './componentes/signout/signout.component'//para salir de la cuenta
import {SignupComponent} from './componentes/signup/signup.component'//para registrarse y obtener una cuenta 
import { GetuserComponent } from './componentes/getuser/getuser.component'//para obtener los ususarios registrados
import { UsuarioComponent } from './componentes/usuario/usuario.component'
import { ProductoComponent} from './componentes/producto/producto.component'
import { AdminComponent } from './componentes/admin/admin.component'
import { CategoriaComponent } from './componentes/categoria/categoria.component'


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

  },
  {
    path:'getuser',
    component:GetuserComponent

  },
  {
    path:'usuario',
    component:UsuarioComponent

  },
  {
    path:'producto',
    component:ProductoComponent

  },
  {
    path:'administrador',
    component: AdminComponent

  },
  {
    path:'categoria',
    component: CategoriaComponent

  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
