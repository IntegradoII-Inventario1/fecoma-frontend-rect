import { useState } from "react";
import Modal from "react-modal";
import { AiOutlineUserAdd } from "react-icons/ai";
import { BsCashCoin } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

import { CrearProveedor } from "../../redux/actions/proveedor";
import { uiCloseModalNewProveedor } from "../../redux/actions/ui";

const NewProveedorModal = () => {
  const dispatch = useDispatch();

  const { modalNewProveedorOpen } = useSelector((state) => state.ui);

  const [formValues, setFormValues] = useState({
    nombre: "",
    ruc:0,
    direccion: 0
  });

  const { nombre,ruc, direccion } = formValues;

  const handleInputChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (
      nombre.trim().length < 1 ||
      ruc.trim().length < 11 ||
      direccion.trim().length < 1 

    ) {
      return Swal.fire(
        "error",
        "Los campos son necesarios y no pueden ser vacios",
        "error"
      );
    } else {
        dispatch(CrearProveedor(nombre,ruc, direccion)); 
    }
    closeModal();
  };

  const closeModal = () => {
    dispatch(uiCloseModalNewProveedor());
  };

  return (
    <Modal
      isOpen={modalNewProveedorOpen}
      //onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      closeTimeoutMS={200}
      className="bg-white dark:bg-gray-800 flex fixed outline-none rounded-md p-4 "
      overlayClassName="modal-fondo"
    >
      <div className="max-w-[400px] dark:text-gray-200 w-[270px] h-[500px] max-h-[540px] md:w-[400px] md:h-[540px] p-2 overflow-y-auto">
        <h1 className="text-2xl font-bold text-center dark:text-white text-gray-600 py-1">
          Nuevo Proveedor
        </h1>
        <hr className="border-gray-500 py-2" />
        <form onSubmit={handleSubmitForm} className="container">
          <div className="flex flex-col py-2">
            <label>Nombre</label>
            <div className="flex items-center bg-blue-50  p-2 rounded-sm border-b-2 border-gray-500 dark:border-gray-200  dark:text-gray-900 dark:bg-gray-500">
              <AiOutlineUserAdd size={25}  className="text-primary" />
              <input
                 onChange={handleInputChange}
                 name="nombre"
                 value={nombre}
                 className="bg-transparent p-2 outline-none w-full dark:placeholder:text-gray-600"
                 placeholder="Ingrese nombre"
              />
            </div>
          </div>


          <div className="flex flex-col py-2">
            <label>Ruc</label>
            <div className="flex items-center bg-blue-50  p-2 rounded-sm border-b-2 border-gray-500 dark:border-gray-200  dark:text-gray-900 dark:bg-gray-500">
              <BsCashCoin size={25} className="text-primary" />
              <input
                 type={"number"}
                 onChange={handleInputChange}
                 name="ruc"
                 value={ruc}
                 className="bg-transparent p-2 outline-none w-full dark:placeholder:text-gray-600"
                 placeholder="Ingrese ruc"
              />
            </div>
          </div>

          <div className="flex flex-col py-2">
            <label>Direccion</label>
            <div className="flex items-center bg-blue-50  p-2 rounded-sm border-b-2 border-gray-500 dark:border-gray-200  dark:text-gray-900 dark:bg-gray-500">
              <BsCashCoin size={25} className="text-primary" />
              <input
                 type="text"
                 onChange={handleInputChange}
                 name="direccion"
                 value={direccion}
                 className="bg-transparent p-2 outline-none w-full dark:placeholder:text-gray-600"
                 placeholder="Ingrese direccion"
              />
            </div>
          </div>

          <div className="flex flex-col py-4">
            <button
              type="submit"
              className="w-full text-center rounded-md bg-blue-600 text-gray-200 p-3 py-3"
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

export default NewProveedorModal;

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");
