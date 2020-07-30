import React from "react";
import If from "./If";

const UsuarioInfo = (props) => {
  const usuario = props.usuario || {};
  return (
    <div>
      <If test={usuario && usuario.nome}>
        Seja Bem Vindo <strong>{usuario.nome}</strong>
      </If>
      <If test={!usuario || !usuario.nome}>
        Seja Bem Vindo <strong>Senhor(a)</strong>
      </If>
    </div>
  );
};

export default UsuarioInfo;
