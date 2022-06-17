import {types} from '../types/types'
import {fetchConToken, fetchForAuth} from '../../utils/fetch'
import Swal from 'sweetalert2'
import { finishLoading, startLoading } from './ui'
import { getAllEmpleados } from './empleado'


export const startRegister = (nombre, apellido, direccion,dni, telefono, correo, username, password) => {
  return async(dispatch) => {
    try {
      const resp = await fetchConToken('api/v1/empleado/crear',{
        nombre, apellido, direccion,dni, telefono, correo, username, password
      },'POST')
      const body = await resp.json();
      Swal.fire('Empleado Creado',body.mensaje,'success')
      dispatch(getAllEmpleados())
    } catch (error) {
      console.log(error);
    }
  }
}

export const startLogin = (usuario, password) => {
  return async(dispatch) => {

    dispatch(startLoading())

    const data = new URLSearchParams()
    data.set('grant_type','password')
    data.set('username',usuario)
    data.set('password',password)
    const resp = await fetchForAuth('oauth/token',data,'POST')
    const body = await resp.json();
    if(body.access_token){
      localStorage.setItem('token',body.access_token);
      localStorage.setItem('refresh_token',body.refresh_token)
      localStorage.setItem('token-init-date',new Date().getTime());
      dispatch(login({
        uid:body.id,
        name:body.nombre
      }))

      dispatch(finishLoading())
    }else{
      Swal.fire('Error',"usuario o contraseña incorrectos",'error')
      dispatch(finishLoading())
    }
  }
}

export const renewToken= (refreshtoken) => {
  return async(dispatch) => {
    const data = new URLSearchParams()
    data.set('grant_type','refresh_token')
    data.set('refresh_token',refreshtoken)

    const resp = await fetchForAuth('oauth/token',data,'POST')
    const body = await resp.json();

    if(body.access_token){
      dispatch(login({
        uid:body.id,
        name:body.nombre
      }))
    }else{
      dispatch(checkingFinish())
    }
  }
}

const checkingFinish = () => ({type:types.authCheckingFinish})


const login = (user) => ({
  type: types.authLogin,
  payload:user
})

const logout = () => ({
  type: types.authLogout
})

export const startLogout = () => {
  return (dispatch) => {
    localStorage.clear()
    dispatch(logout())
  }
}

