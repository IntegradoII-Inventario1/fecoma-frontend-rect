import {MdOutlineScreenSearchDesktop} from 'react-icons/md'
import { BiRename } from "react-icons/bi";

const VentasScreen = () => {
  return (
    <div>
      <section>
        <div className='mb-4'>
          <label className='text-xl font-bold dark:text-gray-400'>Search</label>
          <div className="flex items-center bg-blue-50  p-2 rounded-sm border-b-2 border-gray-500 dark:border-gray-200  dark:text-gray-900 dark:bg-gray-500">
            <MdOutlineScreenSearchDesktop size={25} items-center className="text-primary" />
            <input
              onChange=""
              name=""
              value=""
              className="bg-transparent p-2 outline-none w-full dark:text-gray-200 dark:placeholder:text-gray-600"
              placeholder="Ingrese puesto"
            />
          </div>
        </div>
        <form className='shadow-lg p-4'>
          <div className='flex gap-4 '>
          <div className='flex-1'>
            
            <div className="flex flex-col py-2">
                <label>Puesto</label>
                <div className="flex items-center bg-blue-50  p-2 rounded-sm border-b-2 border-gray-500 dark:border-gray-200  dark:text-gray-900 dark:bg-gray-500">
                <BiRename size={25} items-center className="text-primary" />
                <input
                  onChange=""
                  name=""
                  value=""
                  className="bg-transparent p-2 outline-none w-full dark:text-gray-200 dark:placeholder:text-gray-600"
                  placeholder="Ingrese puesto"
                />
                </div>
              </div>
  
              <div className="flex flex-col py-2">
                <label>Puesto</label>
                <div className="flex items-center bg-blue-50  p-2 rounded-sm border-b-2 border-gray-500 dark:border-gray-200  dark:text-gray-900 dark:bg-gray-500">
                <BiRename size={25} items-center className="text-primary" />
                <input
                  onChange=""
                  name=""
                  value=""
                  className="bg-transparent p-2 outline-none w-full dark:text-gray-200 dark:placeholder:text-gray-600"
                  placeholder="Ingrese puesto"
                />
                </div>
              </div>
  
              <div className="flex flex-col py-2">
                <label>Puesto</label>
                <div className="flex items-center bg-blue-50  p-2 rounded-sm border-b-2 border-gray-500 dark:border-gray-200  dark:text-gray-900 dark:bg-gray-500">
                <BiRename size={25} items-center className="text-primary" />
                <input
                  onChange=""
                  name=""
                  value=""
                  className="bg-transparent p-2 outline-none w-full dark:text-gray-200 dark:placeholder:text-gray-600"
                  placeholder="Ingrese puesto"
                />
                </div>
              </div>
  
            </div>
            <div  className='flex-1'>
            <div className="flex flex-col py-2">
                <label>Puesto</label>
                <div className="flex items-center bg-blue-50  p-2 rounded-sm border-b-2 border-gray-500 dark:border-gray-200  dark:text-gray-900 dark:bg-gray-500">
                <BiRename size={25} items-center className="text-primary" />
                <input
                  onChange=""
                  name=""
                  value=""
                  className="bg-transparent p-2 outline-none w-full dark:text-gray-200 dark:placeholder:text-gray-600"
                  placeholder="Ingrese puesto"
                />
                </div>
              </div>
  
  
              <div className="flex flex-col py-2">
                <label>Puesto</label>
                <div className="flex items-center bg-blue-50  p-2 rounded-sm border-b-2 border-gray-500 dark:border-gray-200  dark:text-gray-900 dark:bg-gray-500">
                <BiRename size={25} items-center className="text-primary" />
                <input
                  onChange=""
                  name=""
                  value=""
                  className="bg-transparent p-2 outline-none w-full dark:text-gray-200 dark:placeholder:text-gray-600"
                  placeholder="Ingrese puesto"
                />
                </div>
              </div>
  
              <div className="flex flex-col py-2">
                <label>Puesto</label>
                <div className="flex items-center bg-blue-50  p-2 rounded-sm border-b-2 border-gray-500 dark:border-gray-200  dark:text-gray-900 dark:bg-gray-500">
                <BiRename size={25} items-center className="text-primary" />
                <input
                  onChange=""
                  name=""
                  value=""
                  className="bg-transparent p-2 outline-none w-full dark:text-gray-200 dark:placeholder:text-gray-600"
                  placeholder="Ingrese puesto"
                />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col py-4">
          <button
            type="submit"
            className="w-full text-center rounded-md bg-blue-600 text-gray-200 p-3 py-3"
          >
            <i className="far fa-save"></i>
            <span> Agregar</span>
          </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default VentasScreen;
