import React from "react";
import "./Card.css";

const Card = (props) => {
  const cardColor = {
    backgroundColor: props.color || "black",
    borderColor: props.color || "black",
  };

  return (
    <div className="card" style={cardColor}>
      <h2 className="titulo">{props.titulo}</h2>
      <div className="conteudo">{props.children}</div>
    </div>
  );
};

export default Card;
