import HeadComponent from "../../components/HeadComponent";
import { AiOutlineUserAdd } from "react-icons/ai";
import { FaUsersCog } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { BsPenFill } from "react-icons/bs";
import { HiViewGridAdd } from "react-icons/hi";
import EmpleadoModal from '../../components/modals/EmpleadoModal';
import CategoriaModal from '../../components/modals/CategoriaModal';
import PuestoModal from '../../components/modals/PuestoModal';
import { useDispatch } from "react-redux";
import { uiOpenModalCategoria, uiOpenModalNewEmpleado, uiOpenModalPuesto } from "../../redux/actions/ui";
import TableCompenet from "../../components/TableCompenet";
import NewEmpleadoModal from "../../components/modals/NewEmpleadoModal";

const AdminScreen = () => {

  const dispatch = useDispatch();

  const abrirModal = () => {
    dispatch(uiOpenModalNewEmpleado());
  };
  const abrirModal1 = () => {
    dispatch(uiOpenModalCategoria());
  };
  const abrirModal2 = () => {
    dispatch(uiOpenModalPuesto());
  };

  return (
    <>
      <HeadComponent titulo="Administración" />
      <div className="dark:text-gray-300">
        <div className="flex flex-col items-center p-1 md:flex-row">
          <div className="flex justify-between p-1 items-center w-full md:w-fit">
            <button
              onClick={abrirModal}
              className=" flex justify-center items-center gap-x-2  w-full bg-blue-600 dark:bg-opacity-70 md:mb-10  text-white dark:text-gray-300 p-2 font-semibold rounded-lg active:scale-95 hover:bg-blue-500 cursor-pointer outline-none"
            >
              <AiOutlineUserAdd size={25}/>
              Empleado
            </button>
          </div>
          <EmpleadoModal></EmpleadoModal>
          <NewEmpleadoModal/>

          <div className="flex justify-between p-1 items-center  w-full md:w-fit">
            <button
              onClick={abrirModal1}
              className=" flex justify-center items-center gap-x-2  w-full bg-blue-600 dark:bg-opacity-70 md:mb-10  text-white dark:text-gray-300 p-2 font-semibold rounded-lg active:scale-95 hover:bg-blue-500 cursor-pointer outline-none"
            >
              <HiViewGridAdd size={25} />
              Categoria
            </button>
          </div>
          <CategoriaModal></CategoriaModal>
          
          <div className="flex justify-between p-1 items-center w-full md:w-fit ">
            <button
              onClick={abrirModal2}
              className="flex justify-center  items-center gap-x-2  w-full bg-blue-600 dark:bg-opacity-70 md:mb-10  text-white dark:text-gray-300 p-2 font-semibold rounded-lg active:scale-95 hover:bg-blue-500 cursor-pointer outline-none"
            >
              <FaUsersCog size={25} />
              Puesto
            </button>
            
          </div>
          <PuestoModal></PuestoModal>

        </div>
        <hr className="hidden border-gray-400 mb-4 dark:border-gray-700"/>

        <div className="hidden overflow-auto w-full h-[480px] rounded-lg shadow mb-2">
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
                  <button className="p-2 active:scale-95 bg-primary bg-opacity-80 dark:bg-opacity-70 rounded-lg">
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
        <div className="hidden rounded-md p-1 justify-end gap-1 bg-white dark:bg-gray-900 text-sm font-semibold tracking-wide">
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
          <hr className="border-gray-400 dark:border-gray-700"/>
        </div>

        <hr className="border-gray-400 mb-4 dark:border-gray-700"/>

        <TableCompenet />
        

        
      </div>

    </>
  );
};

export default AdminScreen;
