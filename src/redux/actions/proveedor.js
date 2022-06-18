import Swal from "sweetalert2";
import { fetchConToken } from "../../utils/fetch";
import { types } from "../types/types";

export const CrearProveedor = (nombre,ruc,direccion) => {
  return async(dispatch) => {
    const resp = await fetchConToken(`api/v1/proveedor/crear`,{
      nombre,ruc,direccion
    },'POST')
    const body = await resp.json();
    Swal.fire("Categoria Creada",body.mensaje,"success");
    dispatch(getAllProveedor())
  }
}


export const getAllProveedor = () => {
  return async(dispatch) => {
    const resp = await fetchConToken(`api/v1/proveedor/lista`)
    const body = await resp.json();
    let proveedores = [];
    proveedores = body
    dispatch(setProveedor(proveedores))
  }
}


export const setProveedor = (proveedores) => ({
  type: types.proveedorLoad,
  payload: proveedores
})

export const cleanProveedor = () => ({
  type: types.proveedorClean,
})


export const activeProveedor = (id,proveedor) => ({
  type:types.proveedorActive,
  payload: {
    id,
    ...proveedor
  }
})


export const startUpdateProveedor = (id,nombre,ruc,direccion,representante) => {
  return async(dispatch) => {
    const resp = await fetchConToken(`api/v1/proveedor/edit/${id}`,{
      nombre, ruc, direccion,representante
    },'PUT')
    await resp.json();
    Swal.fire("Proveedor Actualizado","Proveedor Actualizado con exito","success");
    dispatch(getAllProveedor())
  }
}

export const deleteProveedor = (id) => {
  return async(dispatch) => {
    try {
      await fetchConToken(`api/v1/proveedor/eliminar/${id}`,{},'DELETE')
      Swal.fire("Proveedor Eliminado","El proveedor se elimino con exito","success");
      dispatch(getAllProveedor())
    } catch (error) {
      console.log(error);
    }
    
  }
}