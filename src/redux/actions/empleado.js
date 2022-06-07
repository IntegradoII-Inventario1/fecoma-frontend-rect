import { fetchConToken } from "../../utils/fetch";
import { types } from "../types/types";


export const getEmpleado = (id) => {
  return async(dispatch) => {
    const resp = await fetchConToken(`api/v1/empleado/${id}`)
    const body = await resp.json();
    console.log(body);
  }
}

export const getAllEmpleados = () => {
  return async(dispatch) => {
    const resp = await fetchConToken(`api/v1/empleado/lista`)
    const body = await resp.json();
    let empleados = [];
    empleados = body
    dispatch(setEmpleados(empleados))
  }
}

export const setEmpleados = (empleados) => ({
  type: types.empleadoLoad,
  payload: empleados
})

export const cleanEmpleado = () => ({
  type: types.empleadoClean,
})


export const activeEmpleado = (id,empleado) => ({
  type:types.empleadoActive,
  payload: {
    id,
    ...empleado
  }
})