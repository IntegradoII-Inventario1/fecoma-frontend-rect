import apiCall from "../api";

const commonParams = {
  redirect_uri: "",
  client_id: "",
  secret_id: ""
};

export const fecomaAuthCall = (code) => {
  try {
    
    const params = {
      code,
      grant_type: "",
      ...commonParams
    }
    const searchParams = Object.keys(params).map((key)=> encodeURIComponent(key)+"="+encodeURIComponent(params[key])).join("&");

    const fecomaCall = await apiCall({
      method:"POST",
      url:"",
      body: searchParams,
      headers: {"Content-type":"application/x-www-form-urlencoded"},

    })
    return await fecomaCall.json() 

  } catch (error) {
    console.log(error);
  }
  
}