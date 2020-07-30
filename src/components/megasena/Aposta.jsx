import React from "react";

const Aposta = (props) => {
  return (
    <div>
      <h1>Numeros Apostado: {props.aposta}</h1>
      <div>
        <button onClick={props.down}>-</button>
        <button onClick={props.up}>+</button>
      </div>
    </div>
  );
};

export default Aposta;
