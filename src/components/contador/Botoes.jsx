import React from "react";

const Botoes = (props) => {
  return (
    <div>
      <button onClick={props.incremento}>+</button>
      <button onClick={props.decremento}>-</button>
    </div>
  );
};

export default Botoes;
