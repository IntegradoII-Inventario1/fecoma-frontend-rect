import { BrowserRouter, Route, Routes } from "react-router-dom"
import AuthRoute from "./AuthRoute"
import DashboardRoute from "./DashboardRoute"

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth/*" element={<AuthRoute/>}/>
        <Route path="/*" element={<DashboardRoute/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoute