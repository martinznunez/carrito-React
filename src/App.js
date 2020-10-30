import React from "react";
import CategoriasProvider from "./context/CategoriasContext";
import ProductosInfoProvider from "./context/ProductosInfoContext";
import FinalizarCompra from "./components/FinalizarCompra";
import Productos from "./components/Productos";
import DetalleProducto from "./components/DetalleProducto";
import ProductosCategoria from "./components/ProductosCategoria";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <CategoriasProvider>
          <ProductosInfoProvider>
            <Switch>
              <Route
                exact
                path="/productosCategoria"
                component={ProductosCategoria}
              />
              <Route exact path="/" component={Productos} />
              <Route exact path="/producto/:id" component={DetalleProducto} />
              <Route
                exact
                path="/FinalizarCompra"
                component={FinalizarCompra}
              />
            </Switch>
          </ProductosInfoProvider>
        </CategoriasProvider>
      </Router>
    </>
  );
}

export default App;
