import React, { useEffect, useState } from "react";
import {
  Route,
  useParams,
  useRouteMatch,
  Link,
  Switch,
} from "react-router-dom";
import "../assets/css/blog.css";
import ListaCategoria from "../Components/ListaCategoria";
import ListaPosts from "../Components/ListaPosts";
import { busca } from "../api/api";
import SubCategoria from "./SubCategoria";

const Categoria = () => {
  const { id } = useParams();
  const { url, path } = useRouteMatch();
  const [subcategorias, setSubCategorias] = useState([]);
  useEffect(() => {
    busca(`/categorias/${id}`, (categoria) => {
      setSubCategorias(categoria.subcategorias);
    });
  }, [id]);

  return (
    <>
      <div className="container">
        <h2 className="titulo-pagina">Pet Notícas</h2>
      </div>
      <ListaCategoria />
      <ul className="lista-categorias container flex">
        {subcategorias.map((subcategoria) => {
          return (
            <li
              className={`lista-categorias__categoria lista-categorias__categoria--${id}`}
              key={subcategoria}
            >
              <Link to={`${url}/${subcategoria}`}>{subcategoria}</Link>
            </li>
          );
        })}
      </ul>
      <Switch>
        <Route exact path={`${path}/`}>
          <ListaPosts url={`/posts?categoria=${id}`} />
        </Route>
        <Route path={`${path}/:subcategoria`}>
          <SubCategoria />
        </Route>
      </Switch>
    </>
  );
};
export default Categoria;
