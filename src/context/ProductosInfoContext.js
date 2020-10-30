import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ProductosInfoContext = createContext();

const ProductosInfoProvider = (props) => {
  let productosIniciales = JSON.parse(localStorage.getItem("productos"));

  const [productosInfo, setGuardarProductosInfo] = useState([]);

  const [guardarProductoCompra, setGuardarProductoCompra] = useState(
    productosIniciales
  );

  const [contadorCarrito, setContadorCarrito] = useState(0);
  const [cantidad, setCantidad] = useState("1");

  const [selecCategoria, setSelecCategoria] = useState("");

  const agregarProductoCarrito = (producto) => {
    setGuardarProductoCompra((prevState) => [...prevState, producto]);
  };

  const getProducts = async () => {
    const url = "http://localhost:4000/productos";

    const respuesta = await axios.get(url);

    setGuardarProductosInfo(respuesta.data);
  };

  useEffect(() => {
    try {
      getProducts();
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    let productosIniciales = JSON.parse(localStorage.getItem("productos"));
    if (productosIniciales) {
      localStorage.setItem("productos", JSON.stringify(guardarProductoCompra));
    } else {
      localStorage.setItem("productos", JSON.stringify([]));
    }
  }, [guardarProductoCompra]);

  return (
    <ProductosInfoContext.Provider
      value={{
        productosInfo,
        guardarProductoCompra,
        contadorCarrito,
        selecCategoria,

        cantidad,

        getProducts,
        setGuardarProductoCompra,
        setContadorCarrito,
        setSelecCategoria,

        agregarProductoCarrito,
        setCantidad,
      }}
    >
      {props.children}
    </ProductosInfoContext.Provider>
  );
};

export default ProductosInfoProvider;
