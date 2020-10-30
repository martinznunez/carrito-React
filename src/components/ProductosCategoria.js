import React, { useContext } from "react";
import styled from "@emotion/styled";
import Header from "./Header";
import ComponenteProducto from "./ComponenteProducto";
import { useHistory } from "react-router-dom";

import { ProductosInfoContext } from "../context/ProductosInfoContext";

const ContainerGeneralProductos = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const ProductosCategoria = () => {
  const history = useHistory();
  const { productosInfo, selecCategoria } = useContext(ProductosInfoContext);

  const filtrarCategorias = productosInfo.filter(
    (producto) => producto.categoria === selecCategoria
  );

  if (!selecCategoria || selecCategoria === "--Selecciona categoria--") {
    history.push("/");
  }

  return (
    <>
      <Header />
      <ContainerGeneralProductos>
        {filtrarCategorias.map((producto) => (
          <ComponenteProducto producto={producto} />
        ))}
      </ContainerGeneralProductos>
    </>
  );
};

export default ProductosCategoria;
