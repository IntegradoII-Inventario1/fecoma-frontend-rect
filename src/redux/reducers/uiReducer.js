import { types } from "../types/types";

const initialState = {
  modalIngresoOpen:false,
  modalProvedorOpen:false,
  modalVentaOpen:false,
  modalEmpleadoOpen:false
}

export const uiReducer = (state=initialState,action) => {

  switch (action.type) {
    case types.uiOpenModalIngreso:
      return {
        ...state,
        modalIngresoOpen:true
      }

    case types.uiCloseModalIngreso:
      return {
        ...state,
        modalIngresoOpen:false
      }
    case types.uiOpenModalProveedores:
      return {
        ...state,
        modalProvedorOpen:true
      }

    case types.uiCloseModalProveedores:
      return {
        ...state,
        modalProvedorOpen:false
      }
    case types.uiOpenModalVentas:
      return {
        ...state,
        modalVentaOpen:true
      }

    case types.uiCloseModalVentas:
      return {
        ...state,
        modalVentaOpen:false
      }

    case types.uiOpenModalEmpleado:
      return {
        ...state,
        modalEmpleadoOpen:true
      }

    case types.uiCloseModalEmpleado:
      return {
        ...state,
        modalEmpleadoOpen:false
      }

    

    default:
      return state;
  }

}