import { Component, OnInit } from '@angular/core';
import { GetusuariosService } from 'src/app/servicios/getusuarios.service';
import { RegristrarService } from 'src/app/servicios/regristrar.service';
import { CompraINterface, ProductoInterface, PublicacionInterface } from '../../models/user-interface';
import { CategoriaInterface,CarritoInterface } from '../../models/user-interface';


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

  carrito={
    idcarrito:null,
    cantidad:null,
    preciounitario:null,
    subtotal:null,
    producto:"",
    idcliente:null,
    compro:""
  }


  publicacion={
    idpublicacion: null,
    fechapublicacion: "",
    cantidadpu: null,
    estado: "",
    idcliente: null

  }



  constructor(private authService: GetusuariosService,private getservice_categoria: GetusuariosService,private getserice_producto: GetusuariosService,private crearservice_producto: RegristrarService,private carritoservice_producto: RegristrarService) { }

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

  Carrito: CarritoInterface[] = [];

  Compra : CompraINterface[] = [];

  Publicacion : PublicacionInterface [] = [];

  

  nproducto(){
    console.log("estoy dentro de nproducto")

    this.crearservice_producto.registrar_producto(this.producto.nombre,this.producto.detalle,this.producto.pclave,this.producto.precio,this.producto.mg,this.producto.nmg,this.producto.idcategoria)
      
      .subscribe(
        (res: ProductoInterface[]) => {
          this.Producto= res;
          this.npublicacionp();
        },
        err =>{
          console.log(err);
        }
      )

  }

  npublicacionp(){
    let usuariolegeado=this.authService.get_currentuser();

    this.crearservice_producto.registrar_publicacion(this.publicacion.cantidadpu=1,this.publicacion.idcliente=usuariolegeado.IDCLIENTE)  
      .subscribe(
        (res: PublicacionInterface[]) => {
          this.Publicacion= res;
          
        },
        err =>{
          console.log(err);
        }
      )


  }


  ncarrito(){
    let usuariolegeado=this.authService.get_currentuser();

    this.carritoservice_producto.regsitrar_carrito(this.carrito.idcarrito,this.carrito.cantidad,this.carrito.preciounitario=this.producto.precio,this.carrito.subtotal=this.producto.precio*this.carrito.cantidad,this.carrito.producto=this.producto.nombre,this.carrito.idcliente=usuariolegeado.IDCLIENTE)
    .subscribe(
      (res: CarritoInterface[]) => {
        this.Carrito= res;
        
      },
      err =>{
        console.log(err);
      }
    )

    

  }

  mostrarcarrito(){

    let usuariolegeado=this.authService.get_currentuser();

    this.getserice_producto.getcarritousuario(usuariolegeado.IDCLIENTE)
    .subscribe(
      (res: CarritoInterface[]) => {
        this.Carrito= res;
        
      },
      err =>{
        console.log(err);
      }
    )


  }


  comprarcarrito(idcarrito){

    this.crearservice_producto.registrar_compra(idcarrito)
    .subscribe(
      (res: CompraINterface[]) => {
        this.Compra= res;
        
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
