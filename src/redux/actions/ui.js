import { types } from "../types/types";

//MODAL INGRESO
export const uiOnpenModalIngreso = () => ({type:types.uiOpenModalIngreso})
export const uiCloseModalIngreso = () => ({type:types.uiCloseModalIngreso})
export const uiOnpenModalUpdateIngreso = () => ({type:types.uiOpenModalUpdateIngreso})
export const uiCloseModalUpdateIngreso = () => ({type:types.uiCloseModalUpdateIngreso})

//MODAL PROVEEDOR
export const uiOnpenModalNewProveedor = () => ({type:types.uiOpenModalNewProveedor})
export const uiCloseModalNewProveedor = () => ({type:types.uiCloseModalNewProveedor})
export const uiOnpenModalProveedor = () => ({type:types.uiOpenModalProveedor})
export const uiCloseModalProveedor = () => ({type:types.uiCloseModalProveedor})

//MODAL VENTAS
export const uiOnpenModalVenta = () => ({type:types.uiOpenModalVentas})
export const uiCloseModalVenta = () => ({type:types.uiCloseModalVentas})

//MODAL EMPLEADO
export const uiOpenModalEmpleado = () => ({type:types.uiOpenModalEmpleado})
export const uiCloseModalEmpleado = () => ({type:types.uiCloseModalEmpleado})

//MODAL NEW EMPLEADO
export const uiOpenModalNewEmpleado = () => ({type:types.uiOpenModalNewEmpleado})
export const uiCloseModalNewEmpleado = () => ({type:types.uiCloseModalNewEmpleado})

//MODAL Categoria
export const uiOpenModalCategoria = () => ({type:types.uiOpenModalCategoria})
export const uiCloseModalCategoria = () => ({type:types.uiCloseModalCategoria})

//MODAL Puesto
export const uiOpenModalPuesto = () => ({type:types.uiOpenModalPuesto})
export const uiCloseModalPuesto = () => ({type:types.uiCloseModalPuesto})

export const startLoading = () => ({
  type: types.uiStartLoading
})

export const finishLoading = () => ({
  type: types.uiFinishLoading
})

