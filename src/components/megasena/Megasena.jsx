import React, { Component } from "react";
import Botao from "./Botao";
import Aposta from "./Aposta";
import Display from "./Display";

export default class Megasena extends Component {
  state = {
    numeros: "",
    aposta: 6,
  };

  gerarNumeros = () => {
    let i = 1;
    let novoNumero = "";
    let numerosGerados = [];

    while (i <= this.state.aposta) {
      novoNumero = parseInt(Math.random() * (60 - 1) + 1);
      if (!numerosGerados.includes(novoNumero)) {
        numerosGerados.push(novoNumero);
        i++;
      }
    }

    numerosGerados
      .sort((a, b) => a - b)
      .map((numero, index) => (numerosGerados[index] = numero + " "));

    this.setState({
      numeros: numerosGerados,
    });
  };

  aumentarAposta = () => {
    if (this.state.aposta < 15) {
      this.setState({
        aposta: this.state.aposta + 1,
      });
    }
  };

  diminuirAposta = () => {
    if (this.state.aposta > 6) {
      this.setState({
        aposta: this.state.aposta - 1,
      });
    }
  };

  render() {
    return (
      <div>
        <Display numerosGerados={this.state.numeros} />
        <Aposta
          aposta={this.state.aposta}
          up={this.aumentarAposta}
          down={this.diminuirAposta}
        />
        <Botao gerarNumeros={this.gerarNumeros} />
      </div>
    );
  }
}
