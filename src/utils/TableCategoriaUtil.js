import React from 'react'
import { FaTrash } from 'react-icons/fa'
import { useDispatch } from "react-redux";

const TableCategoriaUtil = ({id,nombre,descripcion}) => {

  const dispatch = useDispatch()

  const eliminar = async () => {
    
  }

  return (
    <tr className="dark:bg-gray-700 bg-white">
      <td className="p-3 text-sm dark:text-gray-300 whitespace-nowrap">
        {nombre}
      </td>
      <td className="p-3 text-sm dark:text-gray-300 whitespace-nowrap">
        {descripcion}
      </td>
      <td className="p-3 text-sm flex gap-x-2 text-white dark:text-gray-300 whitespace-nowrap">
        <p onClick={eliminar} className="p-2 active:scale-95 bg-red-400 dark:bg-opacity-70 rounded-lg">
          <FaTrash/>
        </p>
      </td>
    </tr>
  )
}

export default TableCategoriaUtil