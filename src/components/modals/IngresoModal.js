import { useState } from "react";
import Modal from "react-modal";
import { AiOutlineUserAdd } from "react-icons/ai";

import { FaUsersCog } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import { MdOutlineDescription } from "react-icons/md";
import { FaSortNumericUpAlt } from "react-icons/fa";
import { BsCashCoin } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { uiCloseModalIngreso } from "../../redux/actions/ui";

const IngresoModal = () => {
  const dispatch = useDispatch();

  const { modalIngresoOpen } = useSelector((state) => state.ui);

  const [formValues, setFormValues] = useState({
    nombre: "",
    descripcion:"",
    costo: "",
    cantidad: "",
    categoria: "",
    marca: ""
  });

  const { nombre,descripcion, costo, cantidad, categoria, marca } = formValues;

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
      descripcion.trim().length < 1 ||
      costo.trim().length < 1 ||
      cantidad.trim().length < 1 ||
      categoria.trim().length < 1||
      marca.trim().length < 1 
    ) {
      return Swal.fire("error", "error", "error");
    }
    closeModal();
    console.log(formValues);
  };

  const closeModal = () => {
    dispatch(uiCloseModalIngreso());
  };

  return (
    <Modal
      isOpen={modalIngresoOpen}
      //onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      closeTimeoutMS={200}
      className="bg-white dark:bg-gray-800 flex fixed outline-none rounded-md p-4 overflow-y-auto"
      overlayClassName="modal-fondo"
    >
      <div className="max-w-[400px] dark:text-gray-200 w-[270px] h-[500px] max-h-[540px] md:w-[400px] md:h-[540px] p-2">
        <h1 className="text-2xl font-bold text-center dark:text-white text-gray-600 py-1">
          {" "}
          Nuevo producto{" "}
        </h1>
        <hr className="border-gray-500 py-2" />
        <form onSubmit={handleSubmitForm} className="container">
          <div className="flex flex-col py-2">
            <label>Nombre</label>
            <div className="flex items-center bg-blue-50  p-2 rounded-sm border-b-2 border-gray-500 dark:border-gray-200  dark:text-gray-900 dark:bg-gray-500">
              <AiOutlineUserAdd size={25} items-center className="text-primary" />
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
            <label>Descripcion</label>
            <div className="flex items-center bg-blue-50  p-2 rounded-sm border-b-2 border-gray-500 dark:border-gray-200  dark:text-gray-900 dark:bg-gray-500">
              <MdOutlineDescription size={25} items-center className="text-primary" />
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

          <div className="flex flex-col py-2">
            <label>Costo</label>
            <div className="flex items-center bg-blue-50  p-2 rounded-sm border-b-2 border-gray-500 dark:border-gray-200  dark:text-gray-900 dark:bg-gray-500">
              <BsCashCoin size={25} items-center className="text-primary" />
              <input
                 type={"number"}
                 onChange={handleInputChange}
                 name="costo"
                 value={costo}
                 className="bg-transparent p-2 outline-none w-full dark:placeholder:text-gray-600"
                 placeholder="Ingrese costo"
              />
            </div>
          </div>

          <div className="flex flex-col py-2">
            <label>Cantidad</label>
            <div className="flex items-center bg-blue-50  p-2 rounded-sm border-b-2 border-gray-500 dark:border-gray-200  dark:text-gray-900 dark:bg-gray-500">
              <FaSortNumericUpAlt size={25} items-center className="text-primary" />
              <input
                 type={"number"}
                 onChange={handleInputChange}
                 name="cantidad"
                 value={cantidad}
                 className="bg-transparent p-2 outline-none w-full dark:placeholder:text-gray-600"
                 placeholder="Ingrese cantidad"
              />
            </div>
          </div>


          <div className="flex flex-col py-2">
            <label>Categoria</label>
            <div className="flex items-center bg-blue-50  p-2 rounded-sm border-b-2 border-gray-500 dark:border-gray-200  dark:text-gray-900 dark:bg-gray-500">
              <BiCategory size={25} items-center className="text-primary" />
              <input
                 
                 onChange={handleInputChange}
                 name="categoria"
                 value={categoria}
                 className="bg-transparent p-2 outline-none w-full dark:placeholder:text-gray-600"
                 placeholder="Ingrese categoria"
              />
            </div>
          </div>

          <div className="flex flex-col py-2">
            <label>Marca</label>
            <div className="flex items-center bg-blue-50  p-2 rounded-sm border-b-2 border-gray-500 dark:border-gray-200  dark:text-gray-900 dark:bg-gray-500">
              <FaUsersCog size={25} items-center className="text-primary" />
              <input
                 onChange={handleInputChange}
                 name="marca"
                 value={marca}
                 className="bg-transparent p-2 outline-none w-full dark:placeholder:text-gray-600"
                 placeholder="Ingrese marca"
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

export default IngresoModal;

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
