import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {HttpClient, HttpClientModule } from '@angular/common/http'//se importo tambien, no venia por defecto , para la comunicacion con la api


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './componentes/signup/signup.component';
import { SigninComponent } from './componentes/signin/signin.component';
import { SignoutComponent } from './componentes/signout/signout.component';
import { GetuserComponent } from './componentes/getuser/getuser.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    SignoutComponent,
    GetuserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule//se importo , no venia por defecto
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
