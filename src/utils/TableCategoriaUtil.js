import React from 'react'
import { FaTrash } from 'react-icons/fa'
import { useDispatch } from "react-redux";
import Swal from 'sweetalert2';
import { deleteCategoria } from '../redux/actions/categoria';

const TableCategoriaUtil = ({id,nombre,descripcion}) => {

  const dispatch = useDispatch()

  const eliminar = async () => {
    Swal.fire({
      title: 'Esta seguro de eliminar esta categoria?',
      text: "Esta acción no se puede revertir",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminalo!'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteCategoria(id))
      }
    })
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