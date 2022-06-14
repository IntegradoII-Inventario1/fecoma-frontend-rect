import { FaTrash } from "react-icons/fa";
import { BsPenFill } from "react-icons/bs";
import { uiOnpenModalUpdateIngreso } from "../redux/actions/ui";
import { activeProducto } from "../redux/actions/producto";
import { useDispatch } from "react-redux";


const TableIngresosUtil = (producto) => {

  const {id ,nombre, descripcion, costo,cantidad,proveedor,categoria} = producto

  const dispatch = useDispatch()


  const obtener =  () => {
    dispatch(uiOnpenModalUpdateIngreso());
    dispatch(activeProducto(id,{
      nombre, descripcion, costo,cantidad,proveedor,categoria
    }))
  }

  const eliminar =  () => {
    
  }

  return (
    <tr key={producto.id} className="dark:bg-gray-700 bg-white">
      <td className="p-3 text-sm dark:text-gray-300 whitespace-nowrap">
        {producto.nombre}
      </td>
      <td className="p-3 text-sm dark:text-gray-300 whitespace-nowrap">
        {producto.descripcion}
      </td>
      <td className="p-3 text-sm dark:text-gray-300 whitespace-nowrap">
        {producto.costo}
      </td>
      <td className="p-3 text-sm dark:text-gray-300 whitespace-nowrap">
        {producto.cantidad}
      </td>
      <td className="p-3 text-sm dark:text-green-300 cursor-pointer active:scale-95 whitespace-nowrap">
        {producto.proveedor ? producto.proveedor.nombre : "no asignado"}
      </td>
      <td className="p-3 text-sm dark:text-green-300 cursor-pointer active:scale-95 whitespace-nowrap">
        {producto.categoria ? producto.categoria.nombre : "no asignado"}
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
