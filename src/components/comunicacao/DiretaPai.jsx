import React from "react";
import DiretaFilho from "./DiretaFilho";

const DiretaPai = (props) => {
  return (
    <div>
      <DiretaFilho text="Filho 1" number="100" boolean={true}></DiretaFilho>
    </div>
  );
};

export default DiretaPai;
