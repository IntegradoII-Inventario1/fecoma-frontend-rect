import { types } from "../types/types"

const initialState = {
  categorias:[],
  active:{
    id: null,
    nombre:"",
    descripcion:"",
  }
}

export const categoriaReducer = (state = initialState, action) => {
  switch (action.type) {

    case types.categoriaActive:
      return{
        ...state,
        active:{
          ...action.payload
        }
      }
    case types.categoriaLoad:
      return{
        ...state,
        categorias: [...action.payload]
      }
    
    case types.categoriaClean:
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