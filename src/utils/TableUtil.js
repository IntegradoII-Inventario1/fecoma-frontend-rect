import { BsPenFill,BsToggleOff,BsToggleOn } from "react-icons/bs";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { activeEmpleado, changeStateOFF, changeStateON } from "../redux/actions/empleado";
import { uiOpenModalEmpleado } from "../redux/actions/ui";

const TableUtil = ({id,nombre,apellido,direccion,dni,telefono,correo,username,enabled}) => {

  const dispatch = useDispatch()

  const obtener = async () => {
    dispatch(uiOpenModalEmpleado());
    await dispatch(activeEmpleado(id,{
      nombre,apellido,direccion,dni,telefono,correo,username,enabled
    }))
  }

  const desactivar = async () => {
    dispatch(activeEmpleado(id,{
      nombre,apellido,direccion,dni,telefono,correo,username,enabled
    }))
    Swal.fire({
      title: 'Esta seguro de desactivar la cuenta del empleado?',
      text: "Esta acción no le permitira tener acceso a la pagina",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, desactivalo!'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(changeStateOFF(id,nombre,apellido,direccion,dni,telefono,correo,username,enabled))
      }
    })
  }

  const activar = async () => {
    dispatch(activeEmpleado(id,{
      nombre,apellido,direccion,dni,telefono,correo,username,enabled
    }))
    Swal.fire({
      title: 'Esta seguro de activar la cuenta del empleado?',
      text: "Esta acción le permitira tener acceso a la pagina",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, activalo!'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(changeStateON(id,nombre,apellido,direccion,dni,telefono,correo,username,enabled))
      }
    })
  }

  return (
    <tr className="dark:bg-gray-700 bg-white">
      <td className="p-3 text-sm dark:text-gray-300 whitespace-nowrap">
        {nombre}
      </td>
      <td className="p-3 text-sm dark:text-gray-300 whitespace-nowrap">
        {apellido}
      </td>
      <td className="p-3 text-sm dark:text-gray-300 whitespace-nowrap">
        {direccion}
      </td>
      <td className="p-3 text-sm dark:text-gray-300 whitespace-nowrap">
        {dni}
      </td>
      <td className="p-3 text-sm dark:text-gray-300 whitespace-nowrap">
        {telefono}
      </td>
      <td className="p-3 text-sm dark:text-gray-300 whitespace-nowrap">
        {correo}
      </td>
      <td className="p-3 text-sm dark:text-gray-300 whitespace-nowrap">
        {username}
      </td>
      <td className="p-3 text-sm dark:text-gray-300 whitespace-nowrap">
        *******
      </td>

      <td className="p-3 text-sm flex gap-x-2 text-white dark:text-gray-300 whitespace-nowrap">
        <p
          onClick={obtener}
          className="p-2 active:scale-95 bg-primary bg-opacity-80 dark:bg-opacity-70 rounded-lg"
        >
          <BsPenFill />
        </p>
        {
          enabled ? (
            <p onClick={desactivar} className="p-2 active:scale-95 bg-green-400 dark:bg-opacity-70 rounded-lg">
              <BsToggleOn />
            </p>
          ) : 
          (
            <p onClick={activar} className="p-2 active:scale-95 bg-red-400 dark:bg-opacity-70 rounded-lg">
            <BsToggleOff />
            </p>
          )
        }
      </td>
    </tr>
  );
};

export default TableUtil;
