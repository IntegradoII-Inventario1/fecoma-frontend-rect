import HeadComponent from "../../components/HeadComponent";
import { FaTrash } from "react-icons/fa";
import { BsPenFill } from "react-icons/bs";
import IngresoModal from "../../components/modals/IngresoModal";
import { useDispatch } from "react-redux";
import { uiOnpenModalIngreso } from "../../redux/actions/ui";
const IngresosScreen = () => {

  const dispatch = useDispatch();

  const abrirModal = () => {
      dispatch(uiOnpenModalIngreso())
  }

  return (
    <>
      <HeadComponent titulo="Ingresos" />
      <div className="dark:text-gray-300 flex flex-col">
        <div>
          <button onClick={abrirModal} className="bg-green-600 dark:bg-opacity-70 mb-10 text-white dark:text-gray-300 p-2 font-semibold rounded-lg active:scale-95 hover:bg-green-500 cursor-pointer">
            Ingresar nuevo producto
          </button>
          
        </div>

        <IngresoModal/>

        <div className="overflow-auto w-full h-[480px] rounded-lg shadow mb-2">
          <table className="w-full shadow-inner shadow-gray-400">
            <thead className="dark:bg-gray-900 bg-white border-b-2 border-gray-300 dark:border-gray-700">
              <tr>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Cod
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Descripcion
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Caracteristica
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Cantidad
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Costo
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Proveedor
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Categoria
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Opciones
                </th>
              </tr>
            </thead>
            <tbody className="divide-y dark:divide-gray-600">
              <tr className="dark:bg-gray-700 bg-white">
                <td className="p-3 text-sm dark:text-gray-300 whitespace-nowrap">
                  1
                </td>
                <td className="p-3 text-sm dark:text-gray-300 whitespace-nowrap">
                  Matillo
                </td>
                <td className="p-3 text-sm dark:text-gray-300 whitespace-nowrap">
                  Martillo mecanico
                </td>
                <td className="p-3 text-sm dark:text-gray-300 whitespace-nowrap">
                  24 unid
                </td>
                <td className="p-3 text-sm dark:text-gray-300 whitespace-nowrap">
                  $ 23.56
                </td>
                <td className="p-3 text-sm dark:text-gray-300 whitespace-nowrap">
                  Bosh
                </td>
                <td className="p-3 text-sm dark:text-gray-300 whitespace-nowrap">
                  Maquinaria
                </td>
                <td className="p-3 text-sm flex gap-x-2 text-white dark:text-gray-300 whitespace-nowrap">
                  <button className="p-2 active:scale-95 bg-yellow-400 dark:bg-opacity-70 rounded-lg">
                    <BsPenFill />
                  </button>
                  <button className="p-2 active:scale-95 bg-red-400 dark:bg-opacity-70 rounded-lg">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex rounded-md p-1 justify-end gap-1 bg-white dark:bg-gray-900 text-sm font-semibold tracking-wide">
          <button className="p-1 w-6 font-semibold bg-gray-400 bg-opacity-70 rounded-lg">
            1
          </button>
          <button className="p-1 w-6 font-semibold bg-gray-400 bg-opacity-70 rounded-lg">
            2
          </button>
          <button className="p-1 w-6 font-semibold bg-gray-400 bg-opacity-70 rounded-lg">
            3
          </button>
          <button className="p-1 w-6 font-semibold bg-gray-400 bg-opacity-70 rounded-lg">
            4
          </button>
          <button className="p-1 w-6 font-semibold bg-gray-400 bg-opacity-70 rounded-lg">
            5
          </button>
        </div>
      </div>
    </>
  );
};

export default IngresosScreen;
