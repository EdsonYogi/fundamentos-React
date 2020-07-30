import React from "react";

const MembroFamilia = (props) => {
  return (
    <div>
      <span>
        {props.nome} <strong>{props.sobrenome}</strong>
      </span>
    </div>
  );
};

export default MembroFamilia;
