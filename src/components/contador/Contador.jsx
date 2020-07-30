import React, { Component } from "react";
import "./Contador.css";
import Display from "./Display";
import Passo from "./Passo";
import Botoes from "./Botoes";

export default class Contador extends Component {
  state = {
    numero: this.props.numeroInicial || 0,
    passo: this.props.passoInicial || 5,
  };

  incremento = () => {
    this.setState({
      numero: this.state.numero + this.state.passo,
    });
  };

  decremento = () => {
    this.setState({
      numero: this.state.numero - this.state.passo,
    });
  };
  quandoMudar = (event) => {
    this.setState({
      passo: event || 5,
    });
  };

  render() {
    return (
      <div className="contador">
        <h2>Contador</h2>
        <Display numero={this.state.numero} />
        <div className="formulario">
          <Passo passo={this.state.passo} quandoMudar={this.quandoMudar} />
          <Botoes incremento={this.incremento} decremento={this.decremento} />
        </div>
      </div>
    );
  }
}
