import { useState } from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { uiCloseModalIngreso } from "../../redux/actions/ui";

const IngresoModal = () => {

  const dispatch = useDispatch();

  const {modalIngresoOpen} = useSelector(state => state.ui)

  const [formValues, setFormValues] = useState({
    nombre:'',
    direccion:'',
    telefono:'',
    correo:''
  })

  const{nombre,direccion,telefono,correo} = formValues

  const handleInputChange=({target}) =>{
    setFormValues({
      ...formValues,
      [target.name]:target.value
    })
  }

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if(nombre.trim().length<1 ||
      direccion.trim().length<1 ||
      telefono.trim().length<1 ||
      correo.trim().length<1
    ){
      return Swal.fire("error","error",'error')
    }
    closeModal()
    console.log(formValues);
  }
  
  const closeModal = () => {
    dispatch(uiCloseModalIngreso())
  };

  return (
    <Modal
      isOpen={modalIngresoOpen}
      //onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      closeTimeoutMS={200}
      className="bg-gray-900 flex fixed outline-none rounded-md p-4"
      overlayClassName="modal-fondo"
    >
      <div className="max-w-[400px] text-gray-200 w-[400px] h-[540px] max-h-[540px]">
        <h1 className="text-lg font-bold"> Nuevo evento </h1>
        <hr className="border-gray-600"/>
        <form onSubmit={handleSubmitForm} className="container">
          <div className="flex flex-col py-2">
            <label>Nombre</label>
            <input onChange={handleInputChange} name="nombre" value={nombre} className="rounded-md p-1 placeholder:text-gray-600 text-gray-900 bg-gray-500 outline-none py-2 w-full" placeholder="nombre" />
          </div>

          <div className="flex flex-col py-2">
            <label>Direccion</label>
            <input onChange={handleInputChange} name="direccion" value={direccion} className="rounded-md p-1 placeholder:text-gray-600 text-gray-900 bg-gray-500 outline-none py-2 w-full" placeholder="direccion" />
          </div>

          <hr />
          <div className="flex flex-col py-2">
            <label>Telefono</label>
            <input
              type="text"
              className="rounded-md p-1 placeholder:text-gray-600 text-gray-900 bg-gray-500  outline-none py-2 w-full"
              placeholder="elefono"
              name="telefono"
              onChange={handleInputChange}
              value={telefono}
              autoComplete="off"
            />
            <small id="emailHelp" className="form-text text-muted">
              Una descripción corta
            </small>
          </div>

          <div className="flex flex-col py-2">
            <textarea
              type="text"
              className="rounded-md p-1 placeholder:text-gray-600 text-gray-900 bg-gray-500 outline-none py-2 w-full"
              placeholder="correo"
              value={correo}
              rows="5"
              onChange={handleInputChange}
              name="correo"
            ></textarea>
            <small id="emailHelp" className="form-text text-muted">
              Información adicional
            </small>
          </div>

          <button type="submit" className="w-full text-center rounded-md bg-green-600 text-gray-200 p-3">
            <i className="far fa-save"></i>
            <span> Guardar</span>
          </button>
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
