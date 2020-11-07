
export interface UserInterface{

    IDCLIENTE: number,
    NOMBRE: string,
    APELLIDO: string,
    CORREO: string,
    CONTRASENA: string,
    CCONTRASENA: string,
    FECHANACIMIENTO: string,
    PAIS: string,
    CREDITO: number,
    FOTOGRAFIA: string,
    TIPOUSUARIO: string
}

export interface CategoriaInterface{
    IDCATEGORIA:number,
    NOMBRECATEGORIA: string
}

export interface ProductoInterface{

    IDPRODUCTO: number,
    NOMBRE: string,
    DETALLE: string,
    PALABRASCLAVE: string,
    PRECIO: number,
    MEGUSTA: string,
    NOMEGUSTA: string,
    IDCATEGORIA: number

}

export interface CarritoInterface{

    IDCARRITO: number,
    CANTIDAD: number,
    PRECIOUNITARIO: number,
    SUBTOTAL: number,
    PRODUCTO: string,
    IDCLIENTE: number,
    COMPRO: string

}

export interface CompraINterface{

    IDCOMPRA: number,
    IDCARRITO: number
}

export interface DetalleCInterface{

    IDDETALLECOMPRA: number,
    CANTIDADCOMPRA:number,
    TOTALCOMPRA: number,
    IDCOMPRA: number,
    IDPRODUCTO: number

}

export interface PublicacionInterface{

    IDPUBLICACION: number,
    FECHAPUBLICACION: string,
    CANTIDADPUBLICACION: number,
    ESTADO: string,
    IDCLIENTE: number
}

export interface ComentarioInterface{

    IDCOMENTARIO: number,
    FECHA: string,
    DESCRIPCION: string,
    IDPRODUCTO: number

}

export interface BitacoraInterface{

    IDBITACORA: number,
    DESCRIPCION: string,
    FECHAACCION: string,
    CORREO: string
}

export interface DenunciaInterface{

    IDDENUNCIA: number,
    FECHADENUNCIA: string,
    DESCRIPCION: string,
    CANTIDAD: number,
    IDPUBLICACION: number
}