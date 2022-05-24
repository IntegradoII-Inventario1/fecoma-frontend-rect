import {FaHome} from 'react-icons/fa'
import {MdLocalShipping,MdShoppingCart} from 'react-icons/md'
import {AiFillSetting} from 'react-icons/ai'
import {TiDocumentText} from 'react-icons/ti'

export const menu_icons = [
    {id:1, name:"home", icon:FaHome,route:"/"},
    {id:2, name:"ingreso", icon:MdLocalShipping,route:"/ingresos"},
    {id:3, name:"ventas", icon:MdShoppingCart,route:"/ventas"},
    {id:4, name:"admin", icon:AiFillSetting,route:"/admin"},
    {id:6, name:"reportes", icon:TiDocumentText,route:"/reportes"},
]
