import HeadComponent from "../../components/HeadComponent";
import {CgExtensionAdd} from 'react-icons/cg'
import IngresoModal from "../../components/modals/IngresoModal";
import { useDispatch } from "react-redux";
import { uiOnpenModalIngreso } from "../../redux/actions/ui";
import TableIngresosComponent from "../../components/table/TableIngresosComponent";
import NewIngresoModal from "../../components/modals/NewIngresoModal";
const IngresosScreen = () => {
  const dispatch = useDispatch();

  const abrirModal = () => {
    dispatch(uiOnpenModalIngreso());
  };

  return (
    <>
      <HeadComponent titulo="Ingresos" />
      <div className="dark:text-gray-300 flex flex-col">
      <div className="flex justify-between p-1 items-center  w-full md:w-fit">
            <button
              onClick={abrirModal}
              className=" flex justify-center items-center gap-x-2  w-full bg-blue-600 dark:bg-opacity-70 md:mb-10  text-white dark:text-gray-300 p-2 font-semibold rounded-lg active:scale-95 hover:bg-blue-500 cursor-pointer outline-none"
            >
              <CgExtensionAdd size={25} />
              Producto
            </button>
          </div>

        <IngresoModal />
        <NewIngresoModal/>

        <TableIngresosComponent/>
      </div>
    </>
  );
};

export default IngresosScreen;
