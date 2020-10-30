import React, { useContext } from "react";
import styled from "@emotion/styled";

import Header from "./Header";
import ComponenteProducto from "./ComponenteProducto";
import { ProductosInfoContext } from "../context/ProductosInfoContext";

const ContainerGeneralProductos = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Productos = () => {
  const { productosInfo } = useContext(ProductosInfoContext);

  return (
    <>
      <Header />
      <ContainerGeneralProductos>
        {productosInfo.map((producto) => (
          <ComponenteProducto producto={producto} />
        ))}
      </ContainerGeneralProductos>
    </>
  );
};

export default Productos;
