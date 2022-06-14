import { FaTrash } from "react-icons/fa";
import { BsPenFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { uiOnpenModalUpdateIngreso } from "../redux/actions/ui";
import { activeProducto } from "../redux/actions/ingreso";

const TableIngresosUtil = ({id,nombre,descripcion,costo,cantidad,proveedor,categoria}) => {

  const dispatch = useDispatch()

  const obtener = async () => {
    dispatch(uiOnpenModalUpdateIngreso());
    await dispatch(activeProducto(id,{
      nombre,descripcion,costo,cantidad,proveedor,categoria
    }))
  }

  const eliminar = async () => {
    
  }

  return (
    <tr className="dark:bg-gray-700 bg-white">
      <td className="p-3 text-sm dark:text-gray-300 whitespace-nowrap">
        {nombre}
      </td>
      <td className="p-3 text-sm dark:text-gray-300 whitespace-nowrap">
        {descripcion}
      </td>
      <td className="p-3 text-sm dark:text-gray-300 whitespace-nowrap">
        {costo}
      </td>
      <td className="p-3 text-sm dark:text-gray-300 whitespace-nowrap">
        {cantidad}
      </td>
      <td className="p-3 text-sm dark:text-green-300 cursor-pointer active:scale-95 whitespace-nowrap">
        {!!proveedor ? proveedor : "no asignado"}
      </td>
      <td className="p-3 text-sm dark:text-green-300 cursor-pointer active:scale-95 whitespace-nowrap">
        {!!categoria ? categoria : "no asignado"}
      </td>

      <td className="p-3 text-sm flex gap-x-2 text-white dark:text-gray-300 whitespace-nowrap">
        <p
          onClick={obtener}
          className="p-2 active:scale-95 bg-primary bg-opacity-80 dark:bg-opacity-70 rounded-lg"
        >
          <BsPenFill />
        </p>
        <p onClick={eliminar} className="p-2 active:scale-95 bg-red-400 dark:bg-opacity-70 rounded-lg">
          <FaTrash />
        </p>
      </td>
    </tr>
  );
};

export default TableIngresosUtil;
