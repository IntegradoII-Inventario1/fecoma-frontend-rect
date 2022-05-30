import { useState } from "react";
import Modal from "react-modal";
import { BiRename } from "react-icons/bi";
import { FaDirections } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { RiPassportFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { uiCloseModalEmpleado } from "../../redux/actions/ui";

const EmpleadoModal = () => {
  const dispatch = useDispatch();

  const { modalEmpleadoOpen } = useSelector((state) => state.ui);

  const [formValues, setFormValues] = useState({
    nombres: "",
    apellidos: "",
    dni: "",
    direccion: "",
    telefono: "",
    correo: "",
    puesto: "",
  });

  const { nombres, apellidos, dni, direccion, telefono, correo, puesto } =
    formValues;

  const handleInputChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (
      nombres.trim().length < 1 ||
      apellidos.trim().length < 1 ||
      dni.trim().length < 1 ||
      direccion.trim().length < 1 ||
      telefono.trim().length < 1 ||
      correo.trim().length < 1 ||
      puesto.trim().length < 1
    ) {
      return Swal.fire("error,error,error");
    }
    closeModal();
    console.log(formValues);
  };

  const closeModal = () => {
    dispatch(uiCloseModalEmpleado());
  };
  return (
    <Modal
      isOpen={modalEmpleadoOpen}
      //onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      closeTimeoutMS={200}
      className="bg-white dark:bg-gray-800 flex fixed outline-none rounded-md p-4 overflow-y-auto"
      overlayClassName="modal-fondo"
    >
      <div className="max-w-[400px] dark:text-gray-200 w-[270px] h-[500px] max-h-[540px] md:w-[400px] md:h-[540px] p-2">
        <h1 className="text-2xl font-bold text-center dark:text-white text-gray-600 py-1">Nuevo Empleado</h1>
        <hr className="border-gray-500 py-2" />
        <form onSubmit={handleSubmitForm} className="container">
          <div className="flex flex-col py-2">
            <label>Nombres</label>
            <div className="flex items-center bg-blue-50  p-2 rounded-sm border-b-2 border-gray-500 dark:border-gray-200  dark:text-gray-900 dark:bg-gray-500" >
              <BiRename size={25} items-center color="#46A7FF" />
              <input
                onChange={handleInputChange}
                name="nombres"
                value={nombres}
                className="bg-transparent p-2 outline-none w-full dark:placeholder:text-gray-600"
                placeholder="Ingrese nombres"
              />
            </div>
          </div>

          <div className="flex flex-col py-2">
            <label>Apellidos</label>
            <div className="flex items-center bg-blue-50  p-2 rounded-sm border-b-2 border-gray-500 dark:border-gray-200  dark:text-gray-900 dark:bg-gray-500">
              <BiRename size={25} items-center color="#46A7FF" />
              <input
                onChange={handleInputChange}
                name="apellidos"
                value={apellidos}
                className="bg-transparent p-2 outline-none w-full dark:text-gray-200 dark:placeholder:text-gray-600"
                placeholder="Ingrese apellidos"
              />
            </div>
          </div>

          <div className="flex flex-col py-2">
            <label>DNI</label>
            <div className="flex items-center bg-blue-50  p-2 rounded-sm border-b-2 border-gray-500 dark:border-gray-200  dark:text-gray-900 dark:bg-gray-500">
              <RiPassportFill size={25} items-center color="#46A7FF" />
              <input
                onChange={handleInputChange}
                name="dni"
                value={dni}
                className="bg-transparent p-2 outline-none w-full dark:text-gray-200 dark:placeholder:text-gray-600"
                placeholder="Ingrese DNI"
              />
            </div>
          </div>

          <div className="flex flex-col py-2">
            <label>Dirección</label>
            <div className="flex items-center bg-blue-50  p-2 rounded-sm border-b-2 border-gray-500 dark:border-gray-200  dark:text-gray-900 dark:bg-gray-500">
              <FaDirections size={25} items-center color="#46A7FF" />
              <input
                onChange={handleInputChange}
                name="direccion"
                value={direccion}
                className="bg-transparent p-2 outline-none w-full dark:text-gray-200 dark:placeholder:text-gray-600"
                placeholder="Ingrese dirección"
              />
            </div>
          </div>

          <div className="flex flex-col py-2">
            <label>Teléfono</label>
            <div className="flex items-center bg-blue-50  p-2 rounded-sm border-b-2 border-gray-500 dark:border-gray-200  dark:text-gray-900 dark:bg-gray-500">
              <FaPhoneAlt size={25} items-center color="#46A7FF" />
              <input
                type="text"
                className="bg-transparent p-2 outline-none w-full dark:text-gray-200 dark:placeholder:text-gray-600"
                placeholder="XXXXXXXXX"
                name="telefono"
                onChange={handleInputChange}
                value={telefono}
                autoComplete="off"
              />
            </div>
          </div>

          <div className="flex flex-col py-2">
            <label>Correo</label>
            <div className="flex items-center bg-blue-50  p-2 rounded-sm border-b-2 border-gray-500 dark:border-gray-200  dark:text-gray-900 dark:bg-gray-500">
              <AiOutlineMail size={25} items-center color="#46A7FF" />
              <input
                type="text"
                className="bg-transparent p-2 outline-none w-full dark:text-gray-200 dark:placeholder:text-gray-600"
                placeholder="ejemplo@correo.com"
                value={correo}
                onChange={handleInputChange}
                name="correo"
              ></input>
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
export default EmpleadoModal;

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
