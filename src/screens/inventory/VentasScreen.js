import HeadComponent from "../../components/HeadComponent";
import { useEffect } from "react";
import { Autocomplete } from "@mui/material";
import TextField from "@mui/material/TextField";
import { fetchConToken } from "../../utils/fetch";
import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { startCreateFactura } from "../../redux/actions/producto";
import { BiRename } from "react-icons/bi";

const VentasScreen = () => {
  const { ventas: cart } = useSelector((state) => state);
  const { uid } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [productos, setProductos] = useState([]);
  const [formValues, handleInputChange] = useForm({
    descripcion: "",
    observacion: "",
    createAt: "",
    usuario: "",
    items: "",
    total: "",
  });

  const { descripcion, observacion } = formValues;

  useEffect(() => {
    const getProductos = async () => {
      const resp = await fetchConToken(`api/v1/producto/lista`).catch((e) =>
        console.log(e)
      );
      const p = await resp.json();
      setProductos(p);
      p.map((pr) => (pr.quantity = 1));
    };
    getProductos();
  }, []);

  const suma = (acc, currentValue) => {
    return acc + currentValue.precio * currentValue.quantity;
  };

  const granTotal = cart.reduce(suma, 0);

  const handleSendFrom = () => {
    const items = [];
    const createAt = "2022-06-18T06:13:03.156+00:00"
    const usuario = { id: uid };
    let id = 1;
    cart.map((it) => {
      items.push({
        id: id++,
        cantidad: it.quantity,
        producto: it,
      });
    });
    const total = granTotal;
    dispatch(
      startCreateFactura(
        descripcion,
        observacion,
        createAt,
        usuario,
        items,
        total
      )
    );
    console.log(descripcion, observacion, createAt, usuario, items, total);
  };

  return (
    <div className="overflow-y-auto">
      <HeadComponent titulo="Ventas" />
      <form>
        <div className="flex flex-col py-2">
          <label>descripcion</label>
          <div className="flex items-center bg-blue-50  p-2 rounded-sm border-b-2 border-gray-500 dark:border-gray-200  dark:text-gray-900 dark:bg-gray-500">
            <BiRename size={25} className="text-primary" />
            <input
              onChange={handleInputChange}
              name="descripcion"
              autoComplete="off"
              value={descripcion}
              className="bg-transparent p-2 outline-none w-full dark:text-gray-200 dark:placeholder:text-gray-600"
              placeholder="Ingrese descripcion"
            />
          </div>
        </div>

        <div className="flex flex-col py-2">
          <label>observacion</label>
          <div className="flex items-center bg-blue-50  p-2 rounded-sm border-b-2 border-gray-500 dark:border-gray-200  dark:text-gray-900 dark:bg-gray-500">
            <BiRename size={25} className="text-primary" />
            <input
              onChange={handleInputChange}
              name="observacion"
              autoComplete="off"
              value={observacion}
              className="bg-transparent p-2 outline-none w-full dark:text-gray-200 dark:placeholder:text-gray-600"
              placeholder="Ingrese observacion"
            />
          </div>
        </div>
      </form>

      <Autocomplete
        onChange={(event, product) => {
          dispatch({ type: "ADD", payload: product });
        }}
        id="custom-input-demo"
        options={productos}
        getOptionLabel={(opt) => opt.nombre || ""}
        renderInput={(params) => (
          <TextField
            {...params}
            label="productos"
            placeholder={productos.nombre}
            className="border-gray-500 dark:border-gray-200 bg-white  rounded-md text-gray-900 dark:bg-gray-500"
          />
        )}
      ></Autocomplete>

      <button
        onClick={handleSendFrom}
        type="submit"
        className="w-full text-center rounded-md my-4 bg-blue-600 text-gray-200 p-3"
      >
        <i className="far fa-save"></i>
        <span> Generar venta</span>
      </button>

      <div className="overflow-auto w-full h-min rounded-lg shadow mb-2">
        <table className="w-full shadow-inner shadow-gray-400">
          <thead className="dark:bg-gray-900 dark:text-gray-500 bg-white border-b-2 border-gray-300 dark:border-gray-700">
            <tr>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                ID
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Producto
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Precio
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Cantidad
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Total
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Opciones
              </th>
            </tr>
          </thead>
          <tbody className="divide-y dark:divide-gray-600">
            {cart.map((item) => {
              return (
                <tr key={item.id} className="dark:bg-gray-700 bg-white">
                  <td className="p-3 text-sm dark:text-gray-300 whitespace-nowrap">
                    {item.id}
                  </td>
                  <td className="p-3 text-sm dark:text-gray-300 whitespace-nowrap">
                    {item.nombre}
                  </td>
                  <td className="p-3 text-sm dark:text-gray-300 whitespace-nowrap">
                    {item.precio}
                  </td>
                  <td className="p-3 flex gap-x-2 text-sm dark:text-gray-300 whitespace-nowrap">
                    <button
                      onClick={() =>
                        dispatch({ type: "INCREASE", payload: item })
                      }
                      className="text-lg bg-red-500 rounded-md px-2  text-white"
                    >
                      +
                    </button>
                    <p>{item.quantity}</p>
                    <button
                      onClick={() =>
                        dispatch({ type: "DECREASE", payload: item })
                      }
                      className="text-xl bg-green-500 rounded-md px-3 text-white"
                    >
                      -
                    </button>
                  </td>
                  <td className="p-3 text-sm dark:text-gray-300 whitespace-nowrap">
                    <p>{(item.precio * item.quantity).toFixed(2)}</p>
                  </td>
                  <td className="p-3 text-sm flex gap-x-2 text-white dark:text-gray-300 whitespace-nowrap">
                    <p
                      onClick={() =>
                        dispatch({ type: "REMOVE", payload: item })
                      }
                      className="p-2 active:scale-95 bg-red-400 dark:bg-opacity-70 rounded-lg"
                    >
                      <FaTrash />
                    </p>
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot className="dark:bg-gray-900 bg-white border-b-2 border-gray-300 dark:border-gray-700">
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td className="text-2xl dark:text-gray-500 font-bold">
                Total: {granTotal.toFixed(2)}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default VentasScreen;
