import React from 'react'
import TableCategoriaUtil from '../../utils/TableCategoriaUtil'
import { useSelector } from 'react-redux';

const TableCategoriaComponent = () => {

  const {categorias} = useSelector(state=> state.categorias)

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
                  Descripción
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Opciones
                </th>
              </tr>
            </thead>
            <tbody className="divide-y dark:divide-gray-600">
              {
                categorias.map(categoria => (
                  <TableCategoriaUtil key={categoria.id} {...categoria}/>
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

export default TableCategoriaComponent