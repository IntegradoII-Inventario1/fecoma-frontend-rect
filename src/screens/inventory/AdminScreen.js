import HeadComponent from "../../components/HeadComponent";
import { AiOutlineUserAdd } from "react-icons/ai";
import { FaUsersCog } from "react-icons/fa";
import { HiViewGridAdd } from "react-icons/hi";
import EmpleadoModal from '../../components/modals/EmpleadoModal';
import CategoriaModal from '../../components/modals/CategoriaModal';
import PuestoModal from '../../components/modals/PuestoModal';
import { useDispatch } from "react-redux";
import { uiOpenModalCategoria, uiOpenModalNewEmpleado, uiOpenModalPuesto } from "../../redux/actions/ui";
import TableCompenet from "../../components/TableCompenet";
import NewEmpleadoModal from "../../components/modals/NewEmpleadoModal";
import TableCategoriaComponent from "../../components/table/TableCategoriaComponent";

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

        <hr className="border-gray-400 mb-4 dark:border-gray-700"/>

        <TableCompenet />

        <hr className="border-gray-400 mb-4 dark:border-gray-700"/>

        <TableCategoriaComponent/>
        

        
      </div>

    </>
  );
};

export default AdminScreen;
