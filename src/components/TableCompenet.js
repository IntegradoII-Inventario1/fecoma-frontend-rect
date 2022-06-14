import React from 'react'
import { useSelector } from 'react-redux'
import TableUtil from '../utils/TableUtil';

const TableCompenet = () => {
  const {empleados} = useSelector(state=> state.empleados)
  
  return (
    <>
    <h1>Empleados</h1>
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

    </>
  )
}

export default TableCompenet