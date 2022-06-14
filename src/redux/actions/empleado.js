import Swal from "sweetalert2";
import { fetchConToken } from "../../utils/fetch";
import { types } from "../types/types";


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


export const startUpdateEmpleado = (id,nombre, apellido, direccion,dni, telefono, correo, username, password) => {
  return async(dispatch) => {
    const resp = await fetchConToken(`api/v1/empleado/edit/${id}`,{
      nombre, apellido, direccion,dni, telefono, correo, username, password
    },'PUT')
    const body = await resp.json();
    Swal.fire("Empleado Actualizado","Empleado Actualizado con exito","success");
    console.log(body);
    dispatch(getAllEmpleados())
  }
}

export const deleteEmpleado = (id) => {
  return async(dispatch) => {
    try {
      await fetchConToken(`api/v1/empleado/eliminar/${id}`,{},'DELETE')
      Swal.fire("Empleado Eliminado","El empleado se elimino con exito","success");
      dispatch(getAllEmpleados())
    } catch (error) {
      console.log(error);
    }
    
  }
}

