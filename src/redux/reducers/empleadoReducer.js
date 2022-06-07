import { types } from "../types/types"

const initialState = {
  empleados:[],
  active:null
}

export const empleadoReducer = (state = initialState, action) => {
  switch (action.type) {

    case types.empleadoActive:
      return{
        ...state,
        active:{
          ...action.payload
        }
      }
    case types.empleadoLoad:
      return{
        ...state,
        empleados: [...action.payload]
      }
    
    case types.empleadoClean:
      return{
        ...state,
        active: null
      }
    
    default:
      return{
        ...state
      }
  }
}