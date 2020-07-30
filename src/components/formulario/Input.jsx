import React, { useState } from "react";
import "./Input.css";

const Input = (props) => {
  const [valor, setValor] = useState("Inicial");
  const quandoMudar = (event) => {
    setValor(event.target.value);
  };

  return (
    <div className="input">
      <h1>Input</h1>
      <div className="content">
        <label>Componente Controlado</label>
        <input value={valor} onChange={quandoMudar} />
        <label>Componente Controlado - Sem onChange</label>
        <input value={valor} readOnly />
        <label>Componente não Controlado</label>
        <input value={undefined} />
      </div>
    </div>
  );
};

export default Input;
