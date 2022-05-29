import { useEffect, useState } from 'react';
import {menu_icons} from '../utils/Icons'
import {FaStore,FaSun,FaMoon} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
import { Link } from 'react-router-dom';

const SidebarComponent = () => {

const html = document.querySelector('html')
const local = JSON.parse(localStorage.getItem('isDarkMode'))

const [name, setName] = useState('')
const [darkMode, setDarkMode] = useState(local)

const selectIcon = (name) => {
    setName(name)
}

useEffect(() => {
    if(darkMode){
        html.classList.add('dark')        
    }else{
        html.classList.remove('dark')   
    }
}, [darkMode,html.classList])


const switch_toggle = () =>{
    localStorage.setItem('isDarkMode', !darkMode)
    setDarkMode(!darkMode)
}
const [burguerActive, setBurguerActive] = useState(false)

const activeMenu = () => {
    setBurguerActive(true)

}

  return (
    <>
    
    <div className='hidden md:flex flex-col h-screen max-h-screen gap-y-4 items-center py-8 w-14 lg:w-20 bg-white dark:bg-gray-900'>
        <button className='p-2 bg-opacity-20 rounded-xl bg-primary text-orange-500'
        >
            <FaStore size={30}/>
        </button>
        <div className='flex flex-col gap-y-4 items-center self-end'>
            {menu_icons.map(icon => (
                <div className={`${name === icon.name? "bg-gray-200 dark:bg-gray-800 rounded-l-xl relative before:absolute before:w-4 before:h-8 before:-top-8 before:rounded-br-lg before:right-0 before:shadow-inverse-top dark:before:shadow-inverse-top-dark after:absolute after:w-4 after:h-8 after:-bottom-8 after:rounded-tr-xl after:right-0 dark:after:shadow-inverse-bottom-dark after:shadow-inverse-bottom":""}`} key={icon.id}>
                    <Link to={icon.route}>
                        <button
                        onClick={() => selectIcon(icon.name)}
                        className={`${name === icon.name ? "text-white shadow-primary bg-primary":"text-orange-600"} p-2 lg:p-4 my-4 mr-2  lg:mr-4 ml-5 lg:ml-3 rounded-xl `}>
                            <icon.icon size={20}/>
                        </button>
                    </Link>
                </div>
            ))}

            <button onClick={switch_toggle} className={`${darkMode?"bg-white":"bg-primary"} ml-2 lg:-ml-1 w-12 lg:w-16  h-full  rounded-2xl flex items-center transition duration-300 focus:outline-none shadow`}>
                <div className={`${darkMode?"bg-gray-800 translate-x-3 lg:translate-x-full ml-2":"bg-yellow-500 translate-x-1 w-7"} h-7 relative rounded-full transition duration-500 transform p-[0.20rem] text-white flex justify-center items-center`}>
                    {
                        darkMode ?  <FaMoon size={20}/> : <FaSun size={20}/>
                    }
                </div>
            </button>
        </div>
    </div>
    {
        burguerActive ?
            <div className='w-full h-screen z-20 dark:bg-gray-600 p-4 bg-white absolute md:hidden'>
            <div className='w-full '>
                {menu_icons.map(icon => (
                    <div className={`${name === icon.name? "bg-primary w-full p-2  ":"border-b-[1px] p-2 border-gray-200"}`} key={icon.id}>
                        <Link to={icon.route} className="w-full" onClick={()=>setBurguerActive(false)}>
                                <button
                                onClick={() => selectIcon(icon.name)}
                                className={`${name === icon.name ? "text-white shadow-primary bg-primary":"text-primary"} flex items-center p-2 w-full lg:p-4 justify-center rounded-xl `}>
                                    <icon.icon size={25}/>
                                    <p className='ml-2'>{icon.name}</p>
                                </button>
                            
                        </Link>
                    </div>
                ))}
            </div>
        
        </div>
        :<GiHamburgerMenu onClick={activeMenu} size={30} className="absolute top-2 left-4 md:hidden"/>
        

    }
    </>
  )
}

export default SidebarComponent