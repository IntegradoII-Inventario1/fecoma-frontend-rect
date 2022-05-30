import HeadComponent from "../../components/HeadComponent";
import { AiOutlineUserAdd } from "react-icons/ai";
import { FaUsersCog } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import EmpleadoModal from '../../components/modals/EmpleadoModal';
import CategoriaModal from '../../components/modals/CategoriaModal';
import PuestoModal from '../../components/modals/PuestoModal';
import { useDispatch } from "react-redux";
import { uiOpenModalCategoria, uiOpenModalEmpleado, uiOpenModalPuesto } from "../../redux/actions/ui";
const AdminScreen = () => {
  const dispatch = useDispatch();

  const abrirModal = () => {
    dispatch(uiOpenModalEmpleado());
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
              <AiOutlineUserAdd size={25} items-center />
              Empleado
            </button>
          </div>
          <EmpleadoModal></EmpleadoModal>

          <div className="flex justify-between p-1 items-center  w-full md:w-fit">
            <button
              onClick={abrirModal1}
              className=" flex justify-center items-center gap-x-2  w-full bg-blue-600 dark:bg-opacity-70 md:mb-10  text-white dark:text-gray-300 p-2 font-semibold rounded-lg active:scale-95 hover:bg-blue-500 cursor-pointer outline-none"
            >
              <BiCategory size={25} />
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
        

        
      </div>
    </>
  );
};

export default AdminScreen;
