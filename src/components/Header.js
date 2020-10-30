import React, { useContext, useState } from "react";
import ModalCarrito from "./ModalCarrito";
import styled from "@emotion/styled";
import { ProductosInfoContext } from "../context/ProductosInfoContext";
import { CategoriasContext } from "../context/CategoriasContext";
import { useHistory } from "react-router-dom";

const ContainerTitulo = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  border-bottom: solid 3px red;
  margin: 10px;
`;

const Titulo = styled.h1`
  margin-left: 20px;
`;

const ImgCarrito = styled.img`
  width: 40px;
  margin-top: 10px;
  cursor: pointer;
`;
const ContainerCarrito = styled.div`
  width: 40px;
  margin-right: 30px;
  padding-bottom: 10px;
`;

const ContainerSeccionNav = styled.div`
  display: flex;
  margin-top: 3rem;
  justify-content: space-around;
  align-items: center;
  font-size: 1.3rem;
`;

const ContainerSelec = styled.div`
  display: flex;
  justify-content: center;
`;
const TituloSelec = styled.h5`
  margin: 5px;
`;
const SpanContador = styled.span`
  position: absolute;
  width: 20px;
  height: 20px;
  margin-left: -8px;
  background: #daa520;
  color: #fff;
  border-radius: 100%;
`;

const Header = () => {
  const history = useHistory();
  const { productos } = useContext(CategoriasContext);
  const { contadorCarrito, setSelecCategoria, selecCategoria } = useContext(
    ProductosInfoContext
  );

  const filtros = productos.map((producto) => producto.categoria);
  const filtrosUnicos = [...new Set(filtros)];

  const [estadoModal, setEstadoModal] = useState(false);

  const onChangeSelec = (e) => {
    setSelecCategoria(e.target.value);
    history.push("/productosCategoria");
  };

  const onClickCarrito = () => {
    if (estadoModal === false) {
      setEstadoModal(true);
    } else {
      setEstadoModal(false);
    }
  };

  return (
    <div>
      <nav>
        <ContainerTitulo>
          <Titulo>e-Commerce</Titulo>

          <ContainerCarrito>
            <ImgCarrito
              onClick={onClickCarrito}
              src="/assets/descarga carrito pgn.png"
            ></ImgCarrito>

            <SpanContador> {contadorCarrito} </SpanContador>
            {estadoModal ? <ModalCarrito /> : false}
          </ContainerCarrito>
        </ContainerTitulo>
        <ContainerSeccionNav>
          <input type="text" placeholder="Buscar Productos" />
          <ContainerSelec>
            <TituloSelec> Ordenar por</TituloSelec>
            <select onChange={onChangeSelec} value={selecCategoria}>
              <option>--Selecciona categoria--</option>
              {filtrosUnicos.map((filtro) => (
                <option key={filtro.id} filtro={filtro} value={filtro}>
                  {filtro}
                </option>
              ))}
            </select>
          </ContainerSelec>
        </ContainerSeccionNav>
      </nav>
    </div>
  );
};

export default Header;
