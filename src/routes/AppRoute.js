import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { renewToken } from "../redux/actions/auth"
import { getAllCategorias } from "../redux/actions/categoria"
import { getAllEmpleados } from "../redux/actions/empleado"
import { getAllProductos } from "../redux/actions/producto"
import { getAllProveedor } from "../redux/actions/proveedor"

import AuthRoute from "./AuthRoute"
import DashboardRoute from "./DashboardRoute"
import { PrivateRoute } from "./PrivateRoute"
import { PublicRoute } from "./PublicRoute"



const AppRoute = () => {

  const dispatch = useDispatch()
  const token = localStorage.getItem('refresh_token') || ""
  const {checking} = useSelector(state => state.auth)

  useEffect(() => {
    dispatch(renewToken(token))
    dispatch(getAllEmpleados())
    dispatch(getAllProductos())
    dispatch(getAllCategorias())
    dispatch(getAllProveedor())

  }, [dispatch,token])

  if(checking){
    return (<h5>Espere...</h5>)
  }
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth/*" element={<PublicRoute><AuthRoute/></PublicRoute> }/>
        <Route path="/*" element={ <PrivateRoute> <DashboardRoute/> </PrivateRoute> }/>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoute