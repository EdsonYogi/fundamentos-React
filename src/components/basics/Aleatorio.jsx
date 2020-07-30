import React from "react";

const Aleatorio = (props) => {
  let gerarNumero = Math.ceil(
    Math.random() * (props.max - props.min) + props.min
  );

  return (
    <div>
      <h1>
        Número aleatório de {props.min} á {props.max}
      </h1>
      <h1>{gerarNumero}</h1>
    </div>
  );
};

export default Aleatorio;
