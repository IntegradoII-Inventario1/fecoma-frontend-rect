const baseUrl = process.env.REACT_APP_API_URL;
const credenciales = btoa(`reactapp:123`)


const fetchForLogin = (endpoint, data, method = 'POST') => {
  const url = `${baseUrl}/${endpoint}`;
  return fetch(url,{
    method,
    headers:{
      'Content-Type':'application/x-www-form-urlencoded',
      'Authorization':'Basic '+credenciales
    },
    body:data
  })
}

export{
  fetchForLogin
}