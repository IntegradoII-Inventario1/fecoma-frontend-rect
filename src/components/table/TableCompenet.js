import React from 'react'
import { useSelector } from 'react-redux';
import TableUtil from '../../utils/TableUtil';

const TableCompenet = () => {

  const {empleados} = useSelector(state=> state.empleados)
  
  return (
    <>
      <div className="overflow-auto w-full h-[480px] rounded-lg shadow mb-2">
          <table className="w-full shadow-inner shadow-gray-400">
            <thead className="dark:bg-gray-900 bg-white border-b-2 border-gray-300 dark:border-gray-700">
              <tr>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Nombre
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Apellido
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Direccion
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Dni
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Telefono
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Correo
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Username
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Password
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Opciones
                </th>
              </tr>
            </thead>
            <tbody className="divide-y dark:divide-gray-600">
              {
                empleados.map(empleado => (
                  <TableUtil key={empleado.id} {...empleado}/>
                ))
              }
            </tbody>
          </table>
        </div>
        <div className="hidden rounded-md p-1 justify-end gap-1 bg-white dark:bg-gray-900 text-sm font-semibold tracking-wide">
          <button className="p-1 w-6 font-semibold bg-gray-400 bg-opacity-70 rounded-lg">
            1
          </button>
          <button className="p-1 w-6 font-semibold bg-gray-400 bg-opacity-70 rounded-lg">
            2
          </button>
          <button className="p-1 w-6 font-semibold bg-gray-400 bg-opacity-70 rounded-lg">
            3
          </button>
          <button className="p-1 w-6 font-semibold bg-gray-400 bg-opacity-70 rounded-lg">
            4
          </button>
          <button className="p-1 w-6 font-semibold bg-gray-400 bg-opacity-70 rounded-lg">
            5
          </button>
          <hr className="border-gray-400 dark:border-gray-700"/>
        </div>
    </>
  )
}

export default TableCompenet