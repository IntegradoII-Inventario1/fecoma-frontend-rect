import { types } from "../types/types"

const initialState = {
  productos:[],
  active:{
    id: null,
    nombre:"",
    decripcion:"",
    costo:0,
    precio:0,
    cantidad:0,
    proveedor:{},
    categoria:{}
  }
}

export const ingresoReducer = (state = initialState, action) => {
  switch (action.type) {

    case types.ingresoActive:
      return{
        ...state,
        active:{
          ...action.payload,
          categoria: {id: action.payload.categoria}
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