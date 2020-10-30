import React from "react";
import styled from "@emotion/styled";

import ItemModal from "./ItemModal";

const ContainerProductos = styled.div`
  width: 20%;
  text-align: center;
  background: #000;
  position: absolute;
  margin-top: 20px;

  margin-left: -20px;
  background-color: rgba(0, 0, 0, 0.8);
  @media screen and (min-width: 530px) {
    margin-top: 20px;
    margin-left: -30px;
  }
  @media screen and (min-width: 600px) {
    margin-left: -40px;
  }
  @media screen and (min-width: 700px) {
    margin-left: -60px;
  }
  @media screen and (min-width: 780px) {
    margin-left: -90px;
  }
  @media screen and (min-width: 900px) {
    margin-left: -60px;
    width: 15%;
  }
  @media screen and (min-width: 1000px) {
    margin-left: -75px;
  }
  @media screen and (min-width: 1090px) {
    margin-left: -50px;
    width: 10%;
  }
`;

const ModalCarrito = () => {
  return (
    <>
      <ContainerProductos>
        <ItemModal />
      </ContainerProductos>
    </>
  );
};

export default ModalCarrito;
