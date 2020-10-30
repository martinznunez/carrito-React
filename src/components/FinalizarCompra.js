import React, { useState } from "react";
import styled from "@emotion/styled";
import Swal from "sweetalert2";

import { useHistory } from "react-router-dom";

const ContainerGeneral = styled.div`
  margin: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 500px;
  width: 90%;
  margin-top: 30px;
  border: solid 6px gray;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  @media (min-width: 990px) {
    width: 50%;
  }
`;
const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 300px;
  padding: 10px;
`;
const ContainerLabel = styled.label`
  text-align: center;
  margin-left: 10px;
  font-size: 1.3rem;
  color: #fff;
`;

const Input = styled.input`
  margin-top: 10px;
  padding: 10px;
  color: green;
`;

const FinalizarCompra = () => {
  const history = useHistory();

  const [validarCompra, setValidarCompra] = useState({
    nombre: "",
    numero: "",
    fecha: "",
  });

  const onchangeValue = (e) => {
    setValidarCompra({ ...validarCompra, [e.target.name]: e.target.value });
  };

  const { nombre, numero, fecha } = validarCompra;

  const onClick = () => {
    if (nombre.trim() === "" || numero.trim() === "" || fecha.trim() === "") {
      Swal.fire({
        icon: "Error",
        title: "Oops...",
        text: "Todos los campos son obligatorios!",
      });
    } else {
      Swal.fire("Correcto", "Gracias por su compra!", "success");
      setValidarCompra({ nombre: "", numero: "", fecha: "" });

      history.push("/");
    }
  };

  return (
    <ContainerGeneral>
      <h1> Complete los Datos </h1>
      <form>
        <ContainerLabel> Datos de la tarjeta </ContainerLabel>
        <ContainerInput>
          <Input
            name="nombre"
            type="text"
            placeholder="Nombre como figura en la tarjeta"
            onChange={onchangeValue}
            value={nombre}
          />
          <Input
            name="numero"
            type="number"
            placeholder="Numero de tarjeta"
            onChange={onchangeValue}
            value={numero}
          />
          <Input
            name="fecha"
            type="date"
            placeholder="Fecha de vencimiento de tarjeta"
            onChange={onchangeValue}
            value={fecha}
          />
        </ContainerInput>
      </form>
      <button onClick={onClick} type="submit">
        Enviar
      </button>
    </ContainerGeneral>
  );
};

export default FinalizarCompra;
