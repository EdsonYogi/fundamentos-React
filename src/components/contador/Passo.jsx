import React from "react";

const Passo = (props) => {
  return (
    <div>
      <label>Passo:</label>
      <input
        value={props.passo}
        onChange={(event) => props.quandoMudar(+event.target.value)}
      />
    </div>
  );
};

export default Passo;
