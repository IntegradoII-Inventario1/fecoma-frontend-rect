import React from 'react'
import { useSelector } from 'react-redux';
import TableProveedorUtil from '../../utils/TableProveedorUtil';

const TableProveedorComponent = () => {

  const {proveedores} = useSelector(state=> state.proveedor)

  return (
    <>
    <h1>Proveedores</h1>
      <div className="overflow-auto w-full h-min rounded-lg shadow mb-2">
          <table className="w-full shadow-inner shadow-gray-400">
            <thead className="dark:bg-gray-900 bg-white border-b-2 border-gray-300 dark:border-gray-700">
              <tr>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Nombre
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  ruc
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  direccion
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  representante
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Opciones
                </th>
              </tr>
            </thead>
            <tbody className="divide-y dark:divide-gray-600">
              {
                proveedores.map(proveedor => (
                  <TableProveedorUtil key={proveedor.id} {...proveedor}/>
                ))
              }
            </tbody>
          </table>
        </div>
    </>
  )
}

export default TableProveedorComponent