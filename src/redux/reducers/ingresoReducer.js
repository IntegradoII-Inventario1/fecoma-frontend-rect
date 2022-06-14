import { types } from "../types/types"

const initialState = {
  productos:[],
  active:{
    id: null,
    nombre:"",
    descipcion:"",
    costo: 0,
    cantidad: 0,
    proveedor: null,
    categoria: null,
  }
}

export const ingresosReducer = (state = initialState, action) => {
  switch (action.type) {

    case types.ingresoActive:
      return{
        ...state,
        active:{
          ...action.payload
        }
      }
    case types.ingresoLoad:
      return{
        ...state,
        productos: [...action.payload]
      }
    
    case types.ingresoClean:
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