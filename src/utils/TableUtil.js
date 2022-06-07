import { FaTrash } from "react-icons/fa";
import { BsPenFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { activeEmpleado } from "../redux/actions/empleado";
import { uiOpenModalEmpleado } from "../redux/actions/ui";

const TableUtil = ({id,nombre,apellido,direccion,dni,telefono,correo,username}) => {

  const dispatch = useDispatch()

  const obtener = () => {
    dispatch(activeEmpleado(id,{
      nombre,apellido,direccion,dni,telefono,correo,username
    }))
    dispatch(uiOpenModalEmpleado());
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
        <p className="p-2 active:scale-95 bg-red-400 dark:bg-opacity-70 rounded-lg">
          <FaTrash />
        </p>
      </td>
    </tr>
  );
};

export default TableUtil;
