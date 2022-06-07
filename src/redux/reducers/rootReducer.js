import { combineReducers } from "redux";
import { uiReducer } from "./uiReducer";
import { authReducer } from './authReducer'
import { empleadoReducer } from "./empleadoReducer";

export const rootReducer = combineReducers({
  ui: uiReducer,
  auth: authReducer,
  empleados: empleadoReducer
})