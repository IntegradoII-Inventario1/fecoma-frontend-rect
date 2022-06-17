import TimeClock from '../utils/TimeClock'
import {AiOutlinePoweroff} from 'react-icons/ai'
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {startLogout} from '../redux/actions/auth'


const HeadComponent = ({titulo="Sin titulo"}) => {

  const navigate = useNavigate()
  const dispatch = useDispatch();

  const CerrarSesion = () => {
    navigate('/auth/login',{replace:true})
    dispatch(startLogout())
  }

  return (
    <>
    <header className='mt-4 md:mt-0'>

        <div className='flex justify-between items-center'>
          <h1 className="text-3xl font-semibold leading-loose text-gray-600 dark:text-white">
            {titulo}
          </h1>
          <p onClick={CerrarSesion} className='hover:text-red-500 active:scale-95 font-bold cursor-pointer flex gap-x-2 items-center'><AiOutlinePoweroff/>Cerrar Sesion</p>
        </div>
        <h1 className="font-semibold text-gray-700 dark:text-gray-200">
          <TimeClock />
        </h1>
      </header>
      <hr className="border-gray-400 dark:border-gray-700" />

    </>
  )
}

export default HeadComponent