export default function apiCall({
  url,
  parm,
  method,
  body,
  headers,
}){
  return fetch(url,{
    parm,
    method,
    body,
    headers,
  })
}