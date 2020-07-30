import React from "react";
import Produtos from "../../data/produtos";
import "./TabelaProdutos.css";

const TabelaProdutos = () => {
  const listaProdutos = Produtos.map((produto) => {
    return (
      <tr key={produto.id}>
        <td>{produto.id}</td>
        <td>{produto.nome}</td>
        <td>
          {produto.preco.toLocaleString("br-pt", {
            style: "currency",
            currency: "BRL",
          })}
        </td>
      </tr>
    );
  });
  return (
    <div>
      <table className="tabela">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Preco</th>
          </tr>
        </thead>
        <tbody>{listaProdutos}</tbody>
      </table>
    </div>
  );
};

export default TabelaProdutos;
