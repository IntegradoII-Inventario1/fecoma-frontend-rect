import { useState } from "react";
import Modal from 'react-modal'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2';
import { uiCloseModalEmpleado } from '../../redux/actions/ui';

const EmpleadoModal = () => {

    const dispatch = useDispatch();

    const {modalEmpleadoOpen} = useSelector(state => state.ui)

    const [formValues, setFormValues] = useState({
        id:'',
        nombres:'',
        apellidos:'',
        dni:'',
        direccion:'',
        telefono:'',
        correo:'',
        puesto:''
    })

    const{id,nombres,apellidos,dni,direccion,telefono,correo,puesto} = formValues

    const handleInputChange=({target}) =>{
        setFormValues({
            ...formValues,
            [target.name]:target.value
        })
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();
        if(id.trim().length<1||
        nombres.trim().length<1||
        apellidos.trim().length<1||
        dni.trim().length<1||
        direccion.trim().length<1||
        telefono.trim().length<1||
        correo.trim().length<1||
        puesto.trim().length<1
        ){
            return Swal.fire("error,error,error")
        }
        closeModal()
        console.log(formValues);
    }

    const closeModal = () => {
        dispatch(uiCloseModalEmpleado())
    };
    return(
    <Modal
      isOpen={modalEmpleadoOpen}
      //onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      closeTimeoutMS={200}
      className="bg-white dark:bg-gray-900 flex fixed outline-none rounded-md p-4 overflow-y-auto"
      overlayClassName="modal-fondo"
    >
        <div className="max-w-[400px] dark:text-gray-200 w-[270px] h-[500px] max-h-[540px] md:w-[400px] md:h-[540px]">
        <h1 className="text-lg font-bold"> Nuevo Empleado </h1>
        <hr className="border-gray-600"/>
        <form onSubmit={handleSubmitForm} className="container">
          <div className="flex flex-col py-2">
            <label>Nombres</label>
            <input onChange={handleInputChange} name="nombres" value={nombres} className="rounded-md p-1 placeholder:text-gray-600 text-gray-900 bg-gray-500 outline-none py-2 w-full" placeholder="nombres" />
          </div>

          <div className="flex flex-col py-2">
            <label>Apellidos</label>
            <input onChange={handleInputChange} name="apellidos" value={apellidos} className="rounded-md p-1 placeholder:text-gray-600 text-gray-900 bg-gray-500 outline-none py-2 w-full" placeholder="apellidos" />
          </div>

          <div className="flex flex-col py-2">
            <label>DNI</label>
            <input onChange={handleInputChange} name="dni" value={dni} className="rounded-md p-1 placeholder:text-gray-600 text-gray-900 bg-gray-500 outline-none py-2 w-full" placeholder="DNI" />
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
              placeholder="XXXXXXXXX"
              name="telefono"
              onChange={handleInputChange}
              value={telefono}
              autoComplete="off"
            />

          </div>

          <div className="flex flex-col py-2">
            <label>Correo</label>
            <input
              type="text"
              className="rounded-md p-1 placeholder:text-gray-600 text-gray-900 bg-gray-500 outline-none py-2 w-full"
              placeholder="ejemplo@correo.com"
              value={correo}
              onChange={handleInputChange}
              name="correo"
            ></input>

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
export default EmpleadoModal;

const customStyles = {
    content : {
        top: "50%",
        left: "50%",
        right:"auto",
        botton:"auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",

    },
};

Modal.setAppElement("#root");