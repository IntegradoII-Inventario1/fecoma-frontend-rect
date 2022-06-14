import { types } from "../types/types";

//MODAL INGRESO
export const uiOnpenModalIngreso = () => ({type:types.uiOpenModalIngreso})
export const uiCloseModalIngreso = () => ({type:types.uiCloseModalIngreso})

//MODAL PROVEEDOR
export const uiOnpenModalProveedor = () => ({type:types.uiOpenModalProveedores})
export const uiCloseModalProveedor = () => ({type:types.uiCloseModalProveedores})

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

