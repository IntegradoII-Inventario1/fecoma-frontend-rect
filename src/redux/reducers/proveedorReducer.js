import { types } from "../types/types"

const initialState = {
  proveedores:[],
  active:{
    id: null,
    nombre:"",
    ruc:"",
    direccion:"",
    representante:{},
  }
}

export const proveedorReducer = (state = initialState, action) => {
  switch (action.type) {

    case types.proveedorActive:
      return{
        ...state,
        active:{
          ...action.payload,
          }
      }
    case types.proveedorLoad:
      return{
        ...state,
        proveedores: [...action.payload]
      }
    
    case types.proveedorClean:
      return{
        ...state,
        active: initialState
      }
    
    default:
      return{
        ...state
      }
  }
}