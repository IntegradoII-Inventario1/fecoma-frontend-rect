import { useState } from "react";
import Modal from "react-modal";
import { MdOutlineDescription } from "react-icons/md";
import { BiRename } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { uiCloseModalCategoria } from "../../redux/actions/ui";

const CategoriaModal = () => {
  const dispatch = useDispatch();

  const { modalCategoriaOpen } = useSelector((state) => state.ui);

  const [formValues, setFormValues] = useState({
    nombre: "",
    descripcion: "",
  });

  const { nombre, descripcion } = formValues;

  const handleInputChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (nombre.trim().length < 1 || descripcion.trim().length < 1) {
      return Swal.fire("error,error,error");
    }
    closeModal();
    console.log(formValues);
  };

  const closeModal = () => {
    dispatch(uiCloseModalCategoria());
  };
  return (
    <Modal
      isOpen={modalCategoriaOpen}
      onRequestClose={closeModal}
      style={customStyles}
      closeTimeoutMS={200}
      className="bg-white dark:bg-gray-900 flex fixed outline-none rounded-md p-4 overflow-y-auto"
      overlayClassName="modal-fondo"
    >
      <div className="max-w-[400px] dark:text-gray-200 w-[270px] h-[500px] max-h-[540px] md:w-[400px] md:h-[540px]">
        <h1 className="text-2xl font-bold text-center dark:text-white text-gray-600 py-1">Nueva Categoria</h1>
        <hr className="border-gray-500 py-2" />
        <form onSubmit={handleSubmitForm} className="container">

          <div className="flex flex-col py-2">
            <label>Nombre</label>
            <div className="flex items-center bg-blue-50  p-2 rounded-sm border-b-2 border-gray-500 dark:border-gray-200  dark:text-gray-900 dark:bg-gray-500">
              <BiRename size={25} items-center color="#46A7FF" />
              <input
                onChange={handleInputChange}
                name="nombre"
                value={nombre}
                className="bg-transparent p-2 outline-none w-full dark:text-gray-200 dark:placeholder:text-gray-600"
                placeholder="Ingrese nombre"
              />
            </div>
          </div>

          <div className="flex flex-col py-2">
            <label>Descripcion</label>
            <div className="flex items-center bg-blue-50  p-2 rounded-sm border-b-2 border-gray-500 dark:border-gray-200  dark:text-gray-900 dark:bg-gray-500">
              <MdOutlineDescription size={25} items-center color="#46A7FF" />
              <textarea
                type="text"
                onChange={handleInputChange}
                name="descripcion"
                value={descripcion}
                rows="2"
                className="bg-transparent p-2 outline-none w-full dark:text-gray-200 dark:placeholder:text-gray-600"
                placeholder="Ingrese descripción"
              />
            </div>
          </div>
          
          <div className="flex flex-col py-4">
          <button
            type="submit"
            className="w-full text-center rounded-md bg-blue-600 text-gray-200 p-3"
          >
            <i className="far fa-save"></i>
            <span> Guardar</span>
          </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default CategoriaModal;

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    botton: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");
