import Swal from "sweetalert2";
import { fetchConToken } from "../../utils/fetch";
import { types } from "../types/types";


export const getAllProductos = () => {
  return async(dispatch) => {

    const resp = await fetchConToken(`api/v1/producto/lista`)
    .catch(e => console.log(e))
    let productos = []
    productos = await resp.json()
    dispatch(setProductos(productos))
  }
}

export const startCreateProducto = (nombre, descripcion, costo,precio,cantidad) => {
  return async(dispatch) => {

      const resp = await fetchConToken('api/v1/producto/crear',{
        nombre, descripcion, costo,precio,cantidad
      },'POST').catch(e => console.log(e))
      const body = await resp.json()
      Swal.fire('Producto Creado',body.mensaje,'success')
      dispatch(getAllProductos())
      
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


export const startUpdateProducto = (id,nombre, descripcion, costo,precio,cantidad,proveedors,categorias) => {
  return async(dispatch) => {
    let proveedor  = null
    let categoria = null
    if(categorias && categorias.id !== null){
      categoria = {id:categorias}
    }
    if(proveedors && proveedors.id !== null){
      proveedor = {id:proveedors}
      console.log("proveedor");
    }

    const resp = await fetchConToken(`api/v1/producto/edit/${id}`,{
      nombre, descripcion, costo,precio,cantidad,proveedor,categoria
    },'PUT').catch (e => console.log(e)) 
      const body = await resp.json()
      console.log(body);
      Swal.fire("Producto Actualizado","Producto actualizado con exito","success") 
      dispatch(getAllProductos())
  }
}

export const deleteProducto = (id) => {
  return async(dispatch) => {
    await fetchConToken(`api/v1/producto/eliminar/${id}`,{},'DELETE')
    .catch(e => console.log(e))
    Swal.fire("Producto Eliminado","El producto se elimino con exito","success")
    dispatch(getAllProductos())
  }
}

