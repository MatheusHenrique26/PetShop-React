import React from "react";
import dog from "../assets/img/doguito404.svg";
import "../assets/css/404.css";

function Pagina404() {
  return (
    <div className="container flex flex--centro flex--coluna">
      <img
        className="doguito-imagem"
        src={dog}
        alt="essa pagina não existe"
      />
      <p className="naoencontrado-texto">Ops... Essa pagina não existe</p>
    </div>
  );
}
export default Pagina404;
