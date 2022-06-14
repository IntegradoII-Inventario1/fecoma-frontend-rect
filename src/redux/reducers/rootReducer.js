import { combineReducers } from "redux";
import { uiReducer } from "./uiReducer";
import { authReducer } from './authReducer'
import { empleadoReducer } from "./empleadoReducer";
import { ingresoReducer } from "./ingresoReducer";
import { categoriaReducer } from "./categoriaReducer";


export const rootReducer = combineReducers({
  ui: uiReducer,
  auth: authReducer,
  empleados: empleadoReducer,
  productos:ingresoReducer,
  categorias:categoriaReducer
})