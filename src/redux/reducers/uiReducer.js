import { types } from "../types/types";

const initialState = {
  modalIngresoOpen: false,
  modalNewIngresoOpen: false,
  modalProveedorOpen: false,
  modalNewProveedorOpen: false,
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
        modalNewIngresoOpen: true,
      };

    case types.uiCloseModalIngreso:
      return {
        ...state,
        modalNewIngresoOpen: false,
      };
    case types.uiOpenModalProveedor:
      return {
        ...state,
        modalProveedorOpen: true,
      };

    case types.uiCloseModalProveedor:
      return {
        ...state,
        modalProveedorOpen: false,
      };
    case types.uiOpenModalUpdateIngreso:
      return {
        ...state,
        modalIngresoOpen: true,
      };

    case types.uiCloseModalUpdateIngreso:
      return {
        ...state,
        modalIngresoOpen: false,
      };
    case types.uiOpenModalNewProveedor:
      return {
        ...state,
        modalNewProveedorOpen: true,
      };

    case types.uiCloseModalNewProveedor:
      return {
        ...state,
        modalNewProveedorOpen: false,
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
