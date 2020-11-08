import { Component, OnInit } from '@angular/core';

import { GetusuariosService } from '../../servicios/getusuarios.service'; 
import { BitacoraInterface } from '../../models/user-interface';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  

  constructor(private bitacora:GetusuariosService) { }

  Bitacora : BitacoraInterface [] =[];

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



  
}
