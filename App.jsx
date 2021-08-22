import React from "react";
import "./assets/css/base/base.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./paginas/Home";
import Sobre from "./paginas/Sobre";
import Pagina404 from "./paginas/Pagina404";
import Cabecalho from "./Components/Cabecalho";
import Posts from "./paginas/Posts";
import Categoria from "./paginas/Categoria";

function App() {
  return (
    <>
      <BrowserRouter>
        <Cabecalho />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/sobre">
            <Sobre />
          </Route>
          <Route path="/categoria/:id">
            <Categoria />
          </Route>
          <Route path="/posts/:id">
            <Posts />
          </Route>
          <Route>
            <Pagina404 />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
//No terminal e necessario usarmos o npm start na pasta petshop
//Tambem no terminal e necessario usar o npx json-server --watch db.json --port 5000
