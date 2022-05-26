import { Route, Routes } from "react-router-dom"
import LoginScreen from "../screens/auth/LoginScreen"
import RegisterScreen from "../screens/auth/RegisterScreen"
import FondoLogin from "../utils/FondoLogin"

const AuthRoute = () => {
  return (
    <>
      <div className="flex">
        <FondoLogin/>
        <Routes>
          <Route path="login" element={<LoginScreen/>}/>
          <Route path="register" element={<RegisterScreen/>}/>
        </Routes>
      </div>
    </>
  )
}

export default AuthRoute