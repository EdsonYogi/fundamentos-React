import React from "react";

const IndiretaFilho = (props) => {
  const nomes = ["Paulo", "Guilherme", "Fabio", "Oswaldo", "Thiago"];
  const min = 50;
  const max = 70;
  const gerarIdade = () => {
    return parseInt(Math.random() * (max - min) + min);
  };
  const nerd = () => {
    return Math.random() > 0.5;
  };
  const gerarNome = () => {
    return nomes[parseInt(Math.random() * 5)];
  };
  return (
    <div>
      <div>Filho</div>
      <button
        onClick={() => {
          props.quandoClicar(gerarNome(), gerarIdade(), nerd());
        }}
      >
        Fornecer Informações
      </button>
    </div>
  );
};

export default IndiretaFilho;
