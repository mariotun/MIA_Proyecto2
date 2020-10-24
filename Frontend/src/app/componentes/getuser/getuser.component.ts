import { Component, OnInit } from '@angular/core';
import { GetusuariosService } from 'src/app/servicios/getusuarios.service';

@Component({
  selector: 'app-getuser',
  templateUrl: './getuser.component.html',
  styleUrls: ['./getuser.component.css']
})
export class GetuserComponent implements OnInit {

  constructor(private getusuarios:GetusuariosService) { }

  ngOnInit(): void {//esto se ejecuta primero , antes que el metod de abajo

    this.getusuarios.getuser().subscribe((res)=>{
      console.log(res);
    })
  }

  ObtenerUsuarios(){
    
  }

}
