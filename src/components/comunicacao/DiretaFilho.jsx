import React from "react";

const DiretaFilho = (props) => {
  return (
    <div>
      <div>{props.text}</div>
      <div>{props.number}</div>
      <div>{props.boolean ? "Verdadeiro" : "Falso"}</div>
    </div>
  );
};

export default DiretaFilho;
