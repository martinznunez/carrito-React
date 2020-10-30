import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const CategoriasContext = createContext();

const CategoriasProvider = (props) => {
  const [productos, setGuardarProductos] = useState([]);

  useEffect(() => {
    try {
      const obtenerProductos = async () => {
        const url = "http://localhost:4000/productos";

        const respuesta = await axios.get(url);
        setGuardarProductos(respuesta.data);
      };

      obtenerProductos();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <CategoriasContext.Provider
      value={{
        productos,
      }}
    >
      {props.children}
    </CategoriasContext.Provider>
  );
};

export default CategoriasProvider;
