import React, { useState } from "react";
import { GoPerson } from "react-icons/go";
import {FaUnlockAlt} from 'react-icons/fa'
const LoginScreen = () => {
  const [loginForm, setLoginForm] = useState({
    usuario: "",
    password: "",
  });
  const { usuario, password } = loginForm;

  const handleInputChange = ({ target }) => {
    setLoginForm({
      ...loginForm,
      [target.name]: target.value,
    });
  };

  const handleCrear = (e) => {
    e.preventDefault();
    console.log(loginForm);
  };

  return (
    <div className="dark:bg-gray-900 bg-gray-200 w-full h-screen lg:w-1/2 flex justify-center items-center gap-6">
      <div className="dark:bg-gray-800 bg-white rounded-lg flex flex-col gap-3 w-full h-[90%] m-20">
        <h1 className="text-center text-gray-600 dark:text-gray-200 my-10 text-4xl font-semibold">
          Inicia Sesión
        </h1>
        <form onSubmit={handleCrear} className="px-10 flex flex-col gap-y-12">
          <div className="flex flex-col">
            <label form="usuario" className="dark:text-gray-200">
              Usuario
            </label>

            <div className="flex items-center bg-blue-50 dark:bg-gray-600 p-2 rounded-sm border-b-2 border-gray-500">
              {/*rounded redondeo de esq */}
              <GoPerson size={25} color="#46A7FF"/>
              <input
                className="bg-transparent p-2 outline-none w-full dark:text-gray-200"
                value={usuario}
                onChange={handleInputChange}
                type="text"
                name="usuario"
                placeholder="Escriba su nombre de usuario"
              />
              {/*outline sin borde imput, npm start iniciar */}
            </div>
          </div>

          <div className="flex flex-col">
            <label form="password" className="dark:text-gray-200">Contraseña</label>
            <div className="flex items-center bg-blue-50 dark:bg-gray-600 p-2 rounded-sm border-b-2 border-gray-500">
            <FaUnlockAlt size={25} color="#46A7FF"/>
            <input className="bg-transparent p-2 outline-none w-full dark:text-gray-200"
              value={password}
              onChange={handleInputChange}
              type="password"
              name="password"
              placeholder="Escriba su su contraseña"
            />
            </div>
          </div>

          <button type="submit" className="p-3 bg-blue-800 rounded-2xl border-b-2 border-gray-500 text-white">Ingresar</button>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
