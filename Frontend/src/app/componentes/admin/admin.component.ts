import { Component, OnInit } from '@angular/core';

import { GetusuariosService } from '../../servicios/getusuarios.service'; 
import { BitacoraInterface,Reporte2Interface,Reporte5Interface,Reporte7Interface,Reporte8Interface } from '../../models/user-interface';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  

  constructor(private bitacora:GetusuariosService) { }

  Bitacora : BitacoraInterface [] =[];
  Reporte2 : Reporte2Interface [] = [] ;
  Reporte5 : Reporte5Interface [] = [] ;
  Reporte7 : Reporte7Interface [] = [] ;
  Reporte8 : Reporte8Interface [] = [] ;

  ngOnInit(): void {

    

  }


  //es para las categorias
  regicategoria(){


  }


  //es para mostrar el preporte de la bitacora
  mostrarbitacora(){

    this.bitacora.getbitacora()
    .subscribe(
      (res: BitacoraInterface[]) => {
        this.Bitacora= res;
        
      },
      err =>{
        console.log(err);
      }
    )

  }

  mostrarreporte2(){

    this.bitacora.getreporte2()
    .subscribe(
      (res: Reporte2Interface[]) => {
        this.Reporte2= res;
        
      },
      err =>{
        console.log(err);
      }
    )

  }

  mostrarreporte5(){

    this.bitacora.getreporte5()
    .subscribe(
      (res: Reporte5Interface[]) => {
        this.Reporte5= res;
        
      },
      err =>{
        console.log(err);
      }
    )

  }

  mostrarreporte7(){

    this.bitacora.getreporte7()
    .subscribe(
      (res: Reporte7Interface[]) => {
        this.Reporte7= res;
        
      },
      err =>{
        console.log(err);
      }
    )

  }

  mostrarreporte8(){

    this.bitacora.getreporte8()
    .subscribe(
      (res: Reporte8Interface[]) => {
        this.Reporte8= res;
        
      },
      err =>{
        console.log(err);
      }
    )

  }




}
