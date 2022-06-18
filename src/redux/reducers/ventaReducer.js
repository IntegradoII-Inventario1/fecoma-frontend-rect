
export const ventaReducer = (cart = [], action) => {
  if(action.type === "ADD"){
    let temcart = cart.filter((item)=>item.id===action.payload.id)
    if(temcart<1){
      return [...cart,action.payload]
    }else{
      return cart
    }
  }

  if(action.type === "REMOVE"){
    return cart.filter((item)=>item.id !== action.payload.id)
  }

  if(action.type === "INCREASE"){
    let tempcart = cart.map((item) => {
      if(item.id === action.payload.id){
        return {...item, quantity: item.quantity+1}
      }
      return item
    })
    return tempcart
  }

  if(action.type === "DECREASE"){
    let tempcart = cart.map((item) => {
      if(item.id === action.payload.id){
        return {...item, quantity: item.quantity > 1 ? item.quantity-1 : item.quantity}
      }
      return item
    })
    return tempcart
  }
  return cart
}