import React, { useContext, useState, useEffect } from "react";
import styled from "@emotion/styled";
import { useHistory } from "react-router-dom";
import Header from "./Header";
import ComponenteProducto from "./ComponenteProducto";
import { ProductosInfoContext } from "../context/ProductosInfoContext";

const ContainerGeneralProducto = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

const DetalleProducto = () => {
  const history = useHistory();

  const { productosInfo, getProducts } = useContext(ProductosInfoContext);

  const [resultadoProductoFiltrado, setResultadoProductoFiltrado] = useState();

  let obtenerId = history.location.pathname;

  let id = obtenerId.substr(-1);

  useEffect(() => {
    if (!productosInfo) {
      getProducts();
    }

    let filtrar = productosInfo.filter(
      (producto) => Number(producto.id) === Number(id)
    );
    setResultadoProductoFiltrado(filtrar);
  }, [getProducts, id, productosInfo]);

  return (
    <>
      <Header />
      {resultadoProductoFiltrado ? (
        <ContainerGeneralProducto>
          {resultadoProductoFiltrado.map((producto) => (
            <ComponenteProducto producto={producto} />
          ))}
        </ContainerGeneralProducto>
      ) : null}
    </>
  );
};

export default DetalleProducto;
