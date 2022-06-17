import Swal from "sweetalert2";
import { fetchConToken } from "../../utils/fetch";
import { types } from "../types/types";

export const CrearCategoria = (nombre, descripcion) => {
  return async(dispatch) => {
    const resp = await fetchConToken(`api/v1/categoria/crear`,{
      nombre, descripcion
    },'POST')
    const body = await resp.json();
    Swal.fire("Categoria Creada",body.mensaje,"success");
    dispatch(getAllCategorias())
  }
}


export const getAllCategorias = () => {
  return async(dispatch) => {
    const resp = await fetchConToken(`api/v1/categoria/list`)
    const body = await resp.json();
    let categorias = [];
    categorias = body
    dispatch(setCategorias(categorias))
  }
}


export const setCategorias = (categorias) => ({
  type: types.categoriaLoad,
  payload: categorias
})

export const cleanCategoria = () => ({
  type: types.categoriaClean,
})


export const activeCategoria = (id,categoria) => ({
  type:types.categoriaActive,
  payload: {
    id,
    ...categoria
  }
})


export const startUpdateCategoria = (id,nombre, descripcion) => {
  return async(dispatch) => {
    const resp = await fetchConToken(`api/v1/categoria/edit/${id}`,{
      nombre, descripcion
    },'PUT')
    await resp.json();
    Swal.fire("Categoria Actualizada","Categoria Actualizada con exito","success");
    dispatch(getAllCategorias())
  }
}

export const deleteCategoria = (id) => {
  return async(dispatch) => {
    try {
      await fetchConToken(`api/v1/categoria/eliminar/${id}`,{},'DELETE')
      Swal.fire("Categoria Eliminada","La categoria se elimino con exito","success");
      dispatch(getAllCategorias())
    } catch (error) {
      console.log(error);
    }
    
  }
}