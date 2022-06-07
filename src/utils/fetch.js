const baseUrl = process.env.REACT_APP_API_URL;
const credenciales = btoa(`reactapp:123`)

const fetchSinToken = (endpoint, data, method = 'GET') => {
  const url = `${baseUrl}/${endpoint}`;
  if (method === 'GET') {
    return fetch(url)
  }else{
    return fetch(url,{
      method,
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(data)
    })
  }
}

const fetchConToken = (endpoint, data, method = 'GET') => {
  const url = `${baseUrl}/${endpoint}`;
  const token = localStorage.getItem('token') || ''

  if (method === 'GET') {
    return fetch(url,{
      method,
      headers:{
        'Authorization':'Bearer '+token
      }
    })
  }else{
    return fetch(url,{
      method,
      headers:{
        'Content-Type':'application/json',
        'Authorization':'Bearer '+token
      },
      body:JSON.stringify(data)
    })
  }
}

const fetchForAuth = (endpoint, data, method = 'POST') => {
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
  fetchForAuth,
  fetchSinToken,
  fetchConToken
}