import { types } from "../types/types";

const initialState = {
  modalIngresoOpen: false,
  modalProvedorOpen: false,
  modalVentaOpen: false,
  modalEmpleadoOpen: false,
  modalNewEmpleadoOpen: false,
  modalCategoriaOpen: false,
  modalPuestoOpen: false,
  loading:false,
  smsError:null
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.uiOpenModalIngreso:
      return {
        ...state,
        modalIngresoOpen: true,
      };

    case types.uiCloseModalIngreso:
      return {
        ...state,
        modalIngresoOpen: false,
      };
    case types.uiOpenModalProveedores:
      return {
        ...state,
        modalProvedorOpen: true,
      };

    case types.uiCloseModalProveedores:
      return {
        ...state,
        modalProvedorOpen: false,
      };
    case types.uiOpenModalVentas:
      return {
        ...state,
        modalVentaOpen: true,
      };

    case types.uiCloseModalVentas:
      return {
        ...state,
        modalVentaOpen: false,
      };

    case types.uiOpenModalEmpleado:
      return {
        ...state,
        modalEmpleadoOpen: true,
      };

    case types.uiCloseModalEmpleado:
      return {
        ...state,
        modalEmpleadoOpen: false,
      };
    case types.uiOpenModalCategoria:
      return {
        ...state,
        modalCategoriaOpen: true,
      };

    case types.uiCloseModalCategoria:
      return {
        ...state,
        modalCategoriaOpen: false,
      };
    case types.uiOpenModalPuesto:
      return {
        ...state,
        modalPuestoOpen: true,
      };

    case types.uiCloseModalPuesto:
      return {
        ...state,
        modalPuestoOpen: false,
      };

    case types.uiStartLoading:
      return{
        ...state,
        loading: true
      }

    case types.uiFinishLoading:
      return{
        ...state,
        loading: false
      }
    
    case types.uiOpenModalNewEmpleado:
      return{
        ...state,
        modalNewEmpleadoOpen: true
      }

    case types.uiCloseModalNewEmpleado:
      return{
        ...state,
        modalNewEmpleadoOpen:false
      }
    

    default:
      return state;
  }
};
