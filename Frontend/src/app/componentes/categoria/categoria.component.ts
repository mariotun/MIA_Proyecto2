import { Component, OnInit } from '@angular/core';
import { GetusuariosService } from 'src/app/servicios/getusuarios.service';
import { RegristrarService } from 'src/app/servicios/regristrar.service';
import { CategoriaInterface } from '../../models/user-interface';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  categoria={
    nombrecategoria:""
  }

  constructor(private getservice_categoria: GetusuariosService,private crearcategoria: RegristrarService) { }

  ngOnInit(): void {

    this.getservice_categoria.getcategoria().subscribe((res:CategoriaInterface[])=>{//subscribe escucha si el servidor le va a decir algo 
      this.Categoria=res;
     // console.log(res[0].NOMBRE);
    })


  }

  Categoria: CategoriaInterface[] = [];

  ncategoria(){

    this.crearcategoria.registrar_categoria(this.categoria.nombrecategoria)
      
      .subscribe(
        (res: CategoriaInterface[]) => {
          this.Categoria= res;
          
        },
        err =>{
          console.log(err);
        }
      )

  }



}
