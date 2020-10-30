import React, { useContext, useState, useEffect } from "react";
import styled from "@emotion/styled";
import { ProductosInfoContext } from "../context/ProductosInfoContext";

import { useHistory } from "react-router-dom";

const ModalCarritoStyled = styled.div`
  width: 100%;
  color: #fff;
  border-bottom: solid 2px yellow;
`;

const Button = styled.button`
  margin-top: 5px;
  margin-bottom: 5px;
  font-weight: 600;
  font-size: 0.9rem;
  color: #ffffff;
  background-color: #1883ba;
  border-radius: 6px;
  border: 2px solid #0016b0;
  &:hover {
    color: #1883ba;
    background-color: #ffffff;
  }
  @media screen and (min-width: 1000px) {
    font-size: 1.2rem;
  }
`;

const Parrafo = styled.p`
  padding: 5px;
  font-weight: 700;
  font-size: 1.3rem;
`;

const ItemModal = () => {
  const history = useHistory();

  const { guardarProductoCompra, setGuardarProductoCompra } = useContext(
    ProductosInfoContext
  );

  const [obtenerIdEliminar, setObtenerIdEliminar] = useState();
  const [obteneridCompra, setObtenerIdCompra] = useState();

  const onClickEliminar = (producto) => {
    setObtenerIdEliminar(producto.detalles.id);
  };

  const onClickCompra = (producto) => {
    setObtenerIdCompra(producto.detalles.id);
  };

  useEffect(() => {
    if (obtenerIdEliminar) {
      const filtrar = guardarProductoCompra.filter(
        (producto) => producto.detalles.id !== obtenerIdEliminar
      );

      setGuardarProductoCompra(filtrar);
    }

    if (obteneridCompra) {
      const filtrar = guardarProductoCompra.filter(
        (producto) => producto.detalles.id !== obteneridCompra
      );

      setGuardarProductoCompra(filtrar);

      history.push("/FinalizarCompra");
    }
  }, [obtenerIdEliminar, obteneridCompra]);

  console.log(guardarProductoCompra, "guardarProductoCompra");

  return (
    <>
      {guardarProductoCompra.map((producto) => (
        <ModalCarritoStyled>
          <Parrafo> {producto.detalles.nombre}</Parrafo>
          <Parrafo> ${producto.detalles.precio * producto.cantidad}</Parrafo>
          <Parrafo> Cantidad: {producto.cantidad}</Parrafo>

          <Button onClick={() => onClickCompra(producto)}>Comprar</Button>
          <br></br>
          <Button onClick={() => onClickEliminar(producto)}>Eliminar</Button>
        </ModalCarritoStyled>
      ))}
    </>
  );
};

export default ItemModal;
