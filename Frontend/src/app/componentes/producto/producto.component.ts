import { Component, OnInit } from '@angular/core';
import { GetusuariosService } from 'src/app/servicios/getusuarios.service';
import { RegristrarService } from 'src/app/servicios/regristrar.service';
import { ProductoInterface } from '../../models/user-interface';
import { CategoriaInterface } from '../../models/user-interface';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  producto={
    
      nombre:"",
      detalle:"",
      pclave:"",
      precio:null,
      mg:"",
      nmg:"",
      idcategoria:null
  }

  categoria={
    nombrecategoria:""
  }


  constructor(private getservice_categoria: GetusuariosService,private getserice_producto: GetusuariosService,private crearservice_producto: RegristrarService) { }

  ngOnInit(): void {

    this.getserice_producto.getproducto().subscribe((res:ProductoInterface[])=>{//subscribe escucha si el servidor le va a decir algo 
      this.Producto=res;
    
    })

    this.getservice_categoria.getcategoria().subscribe((res:CategoriaInterface[])=>{//subscribe escucha si el servidor le va a decir algo 
      this.Categoria=res;
     // console.log(res[0].NOMBRE);
    })

  }


  Producto: ProductoInterface[] = [];

  Categoria: CategoriaInterface[] = [];

  nproducto(){
    console.log("estoy dentro de nproducto")

    this.crearservice_producto.registrar_producto(this.producto.nombre,this.producto.detalle,this.producto.pclave,this.producto.precio,this.producto.mg,this.producto.nmg,this.producto.idcategoria)
      
      .subscribe(
        (res: ProductoInterface[]) => {
          this.Producto= res;
          
        },
        err =>{
          console.log(err);
        }
      )

  }


  //ENVIAR DETALLE
  set_detalleproducto(nombre,detalle,pclaves,precio){

    this.producto.nombre=nombre;
    this.producto.detalle=detalle;
    this.producto.pclave=pclaves;
    this.producto.precio=precio;
    
  }


  get_idcategoria(nomecategoria){
    this.categoria.nombrecategoria=nomecategoria;
  }

}
