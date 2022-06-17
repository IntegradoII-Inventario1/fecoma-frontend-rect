import { types } from "../types/types"

const initialState = {
  empleados:[],
  active:{
    id: null,
    nombre:"",
    apellido:"",
    direccion:"",
    dni:"",
    telefono:"",
    correo:"",
    username:"",
    password:"",
    password2:"",
    enabled:null,
  }
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
        active: initialState
      }
    
    default:
      return{
        ...state
      }
  }
}