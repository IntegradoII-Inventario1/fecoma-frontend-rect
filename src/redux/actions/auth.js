import {types} from '../types/types'
import {fetchForLogin} from '../../utils/fetch'

export const startLogin = (usuario, password) => {
  return async(dispatch) => {
    const data = new URLSearchParams()
    data.set('grant_type','password')
    data.set('username',usuario)
    data.set('password',password)
    const resp = await fetchForLogin('oauth/token',data,'POST')
    const body = await resp.json();
    console.log(body);
    if(body.access_token){
      localStorage.setItem('token',body.access_token)
      dispatch(login({
        uid:body.id,
        name:body.nombre
      }))
    }
  }
}


const login = (user) => ({
  type: types.authLogin,
  payload:user
})