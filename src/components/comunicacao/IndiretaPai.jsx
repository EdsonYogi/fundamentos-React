import React, { useState } from "react";
import IndiretaFilho from "./IndiretaFilho";

const IndiretaPai = (props) => {
  const [nome, setNome] = useState("?");
  const [idade, setIdade] = useState(0);
  const [nerd, setNerd] = useState(false);
  const fornecerInformacoes = (nome, idade, nerd) => {
    setNome(nome);
    setIdade(idade);
    setNerd(nerd);
  };

  return (
    <div>
      <div>
        <strong>Pai: </strong>
        {nome} {idade} {nerd ? "Verdadeiro" : "Falso"}
      </div>

      <IndiretaFilho quandoClicar={fornecerInformacoes}></IndiretaFilho>
    </div>
  );
};

export default IndiretaPai;
