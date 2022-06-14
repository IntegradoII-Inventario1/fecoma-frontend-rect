import Swal from "sweetalert2";
import { fetchConToken } from "../../utils/fetch";
import { types } from "../types/types";

export const CrearProducto = (nombre, descripcion,costo,cantidad,proveedor,categoria) => {
  return async(dispatch) => {
    const resp = await fetchConToken(`api/v1/producto/crear`,{
      nombre, descripcion,costo,cantidad,proveedor,categoria
    },'POST')
    const body = await resp.json();
    console.log(body);
    Swal.fire("Nuevo producto agregado",body.mensaje,"success");
    dispatch(getAllProductos())
  }
}


export const getAllProductos = () => {
  return async(dispatch) => {
    const resp = await fetchConToken(`api/v1/producto/lista`)
    const body = await resp.json();
    let productos = [];
    productos = body
    dispatch(setProductos(productos))
  }
}


export const setProductos = (productos) => ({
  type: types.ingresoLoad,
  payload: productos
})

export const cleanProducto = () => ({
  type: types.ingresoClean,
})


export const activeProducto = (id,producto) => ({
  type:types.ingresoActive,
  payload: {
    id,
    ...producto
  }
})


export const startUpdateProducto = (id,nombre, descripcion,costo,cantidad,proveedor,categoria) => {
  return async(dispatch) => {
    const resp = await fetchConToken(`api/v1/producto/edit/${id}`,{
      nombre, descripcion,costo,cantidad,proveedor,categoria
    },'PUT')
    await resp.json();
    Swal.fire("Producto Actualizad","Producto Actualizado con exito","success");
    dispatch(getAllProductos())
  }
}

export const deleteProducto = (id) => {
  return async(dispatch) => {
    try {
      await fetchConToken(`api/v1/producto/eliminar/${id}`,{},'DELETE')
      Swal.fire("Producto Eliminado","El producto se elimino con exito","success");
      dispatch(getAllProductos())
    } catch (error) {
      console.log(error);
    }
    
  }
}