import React, { useContext, useState } from "react";
import styled from "@emotion/styled";
import { useHistory } from "react-router-dom";

import { ProductosInfoContext } from "../context/ProductosInfoContext";

const ContainerProducto = styled.div`
  width: 250px;
  height: 350px;
  background: #80ded9;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: 10px;
  padding: 10px;
`;

const ContainerImgProducto = styled.div`
  width: 100%;
  height: 240px;
  text-align: center;
  border-bottom: solid 1px red;
`;

const Img = styled.img`
  width: 178px;
  margin: 5px;
`;

const ContainerInfoProducto = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
`;

const InputProducto = styled.input`
  margin: 20px;
  width: 25px;
`;
const BtnCarrtito = styled.button`
  font-size: 0.8rem;
  background: red;
  color: #fff;
  padding: 3px;
  padding-left: 10px;
  padding-right: 10px;
  font-family: helvetica;
  font-weight: 300;
  font-style: italic;
  color: #006505;
  background-color: #82b085;
  border-radius: 15px;
  border: 3px double #006505;
  &:hover {
    opacity: 0.6;
  }
  @media screen and (min-width: 1100px) {
    font-size: 1rem;
  }
`;

const ButtonDetalles = styled.button`
  transition-duration: 0.4s;
  margin-bottom: 5px;
  padding: 8px;
  border-radius: 14%;
  &:hover {
    background-color: #4caf50;
    color: white;
  }
`;
const TituloProducto = styled.h1`
  padding: 5px;
  font-weight: 700;
  font-size: 1.4rem;
  font-style: italic;
  text-transform: uppercase;
`;
const TituloTotal = styled.h4`
  margin-left: 10px;
`;

const ComponenteProducto = ({ producto }) => {
  const history = useHistory();
  const {
    setContadorCarrito,
    agregarProductoCarrito,
    guardarProductoCompra,
  } = useContext(ProductosInfoContext);

  setContadorCarrito(guardarProductoCompra.length);

  const [cantidad, setCantidad] = useState("1");

  const onClickDetalles = (id) => {
    history.push(`/producto/${id}`);
  };

  return (
    <ContainerProducto>
      <TituloProducto>{producto.nombre}</TituloProducto>
      <ContainerImgProducto>
        <Img src="/assets/img.jpg" alt="" />
        <ButtonDetalles onClick={() => onClickDetalles(producto.id)}>
          Detalles
        </ButtonDetalles>
      </ContainerImgProducto>
      <ContainerInfoProducto>
        <TituloTotal>
          Total <span>${producto.precio * cantidad} </span>
        </TituloTotal>
        <InputProducto
          onChange={(e) => setCantidad(e.target.value)}
          type="number"
          name="cantidad"
          value={cantidad}
        />
        <BtnCarrtito
          onClick={() => {
            setCantidad(1);
            agregarProductoCarrito({
              detalles: producto,
              cantidad,
            });
          }}
        >
          Agregar al Carrito
        </BtnCarrtito>
      </ContainerInfoProducto>
    </ContainerProducto>
  );
};

export default ComponenteProducto;
