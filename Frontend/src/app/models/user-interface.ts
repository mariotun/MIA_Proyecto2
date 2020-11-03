
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