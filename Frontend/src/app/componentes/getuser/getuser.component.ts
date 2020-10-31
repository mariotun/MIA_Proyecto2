import { Component, OnInit } from '@angular/core';
import { GetusuariosService } from 'src/app/servicios/getusuarios.service';
import { UserInterface } from '../../models/user-interface';

@Component({
  selector: 'app-getuser',
  templateUrl: './getuser.component.html',
  styleUrls: ['./getuser.component.css']
})
export class GetuserComponent implements OnInit {

  constructor(private getusuarios:GetusuariosService) { }

  ngOnInit(): void {//esto se ejecuta primero , antes que el metodo de abajo

    this.getusuarios.getuser().subscribe((res:UserInterface[])=>{//subscribe escucha si el servidor le va a decir algo 
      this.Usuarios=res;
     // console.log(res[0].NOMBRE);
    })
    
  }

  Usuarios: UserInterface[] = [];

  ObtenerUsuarios(){
    
  }

  

}
