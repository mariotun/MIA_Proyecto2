import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { GetusuariosService } from 'src/app/servicios/getusuarios.service';
import { RegristrarService } from 'src/app/servicios/regristrar.service';
import { ComentarioInterface, CompraINterface, ProductoInterface, PublicacionInterface } from '../../models/user-interface';
import { CategoriaInterface,CarritoInterface,BitacoraInterface,UserInterface } from '../../models/user-interface';


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  

  producto={
      idproducto:null,
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

  comentario={
    idcomentario: null,
    fechacomentario: "",
    descripcioncomentario: "",
    idproducto: null
  }

  bitacora={
    idbitacora:null,
    descripcion:"",
    fecha:"",
    correo:""
  }



  constructor(private crearservice_updateuser: RegristrarService,private authService: GetusuariosService,private getservice_categoria: GetusuariosService,private getserice_producto: GetusuariosService,private crearservice_producto: RegristrarService,private carritoservice_producto: RegristrarService) { }

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

  Comentario : ComentarioInterface [] = [];

  Bitacora : BitacoraInterface [] =[];

  Usuarios: UserInterface[] = [];


  nproducto(){
    console.log("estoy dentro de nproducto")
    let usuariolegeado=this.authService.get_currentuser()

    this.crearservice_producto.registrar_producto(this.producto.nombre,this.producto.detalle,this.producto.pclave,this.producto.precio,this.producto.mg,this.producto.nmg,this.producto.idcategoria)
      
      .subscribe(
        (res: ProductoInterface[]) => {
          this.Producto= res;
          this.npublicacionp();
          this.nbitacora("Se realizo una publicacion del producto \""+this.producto.nombre+"\"",usuariolegeado.CORREO);
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
  

  ncomentario(){

    let usuariolegeado=this.authService.get_currentuser();

    this.crearservice_producto.registrar_comentario(this.comentario.descripcioncomentario,this.comentario.idproducto=this.producto.idproducto)
      .subscribe(
        (res: ComentarioInterface[]) => {
          this.Comentario= res;
          this.nbitacora("Se realizo un comentario para el producto \""+this.producto.nombre+"\"",usuariolegeado.CORREO);
        },
        err =>{
          console.log(err);
        }
      )


  }

  get_comentario_producto(idprod){

    let usuariolegeado=this.authService.get_currentuser();

    this.getserice_producto.getcomentarioproducto(idprod)
      .subscribe(
        (res: ComentarioInterface[]) => {
          this.Comentario= res;
          this.nbitacora("Se vieron los comentarios del producto \""+this.producto.nombre+"\"",usuariolegeado.CORREO);
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
        this.nbitacora("Se coloco el produccto \""+this.producto.nombre+"\" ,en el carrito",usuariolegeado.CORREO);
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
        this.nbitacora("Se mostraron los productos que esta en el carrito ",usuariolegeado.CORREO);
      },
      err =>{
        console.log(err);
      }
    )


  }


  comprarcarrito(idcarrito,subtotal){

    let usulogeado=this.authService.get_currentuser();
    var total=(usulogeado.CREDITO) - (subtotal);
    console.log("---->",usulogeado.CREDITO,"---->",subtotal)
    if ( total >= 0 ){
    this.crearservice_producto.registrar_compra(idcarrito)
    .subscribe(
      (res: CompraINterface[]) => {
        this.Compra= res;
        this.nbitacora("Se compro el producto \""+this.producto.nombre+"\" , en el carrito",usulogeado.CORREO);
        this.updateusuario2();

      },
      err =>{
        console.log(err);
      }
    )

  }else{
    console.log("¡¡¡¡¡¡ EL CREDITO NO ES SUFICIENTE PARA HACER LA OPERACION (COMPRA)!!!!!",total)
  }

  }
  updateusuario2() {

    let usulogeado=this.authService.get_currentuser();
    let total=usulogeado.CREDITO-this.carrito.subtotal;

      this.crearservice_updateuser.actualizar_usuario(usulogeado.IDCLIENTE,usulogeado.NOMBRE,usulogeado.APELLIDO,usulogeado.CORREO,usulogeado.CONTRASENA,usulogeado.CCONTRASENA,"23/8/1984",usulogeado.PAIS,total,"/home/mario","cliente")
    .subscribe(
      (res: UserInterface[]) => {
        this.Usuarios= res;
        
      },
      err =>{
        console.log(err);
      }
    )
    
  }



  nbitacora(descripcion,correo){

    this.crearservice_producto.registrar_bitacora(descripcion,correo)
    .subscribe(
      (res: BitacoraInterface[]) => {
        this.Bitacora= res;
        
      },
      err =>{
        console.log(err);
      }
    )

  }


  

  //ENVIAR DETALLE
  set_detalleproducto(idprod,nombre,detalle,pclaves,precio){
    this.producto.idproducto=idprod;
    this.producto.nombre=nombre;
    this.producto.detalle=detalle;
    this.producto.pclave=pclaves;
    this.producto.precio=precio;
    
  }


  get_idcategoria(nomecategoria){
    this.categoria.nombrecategoria=nomecategoria;
  }

}
