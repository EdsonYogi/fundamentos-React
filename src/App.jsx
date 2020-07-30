import React from "react";

//Components
import Primeiro from "./components/basics/Primeiro";
import ComParametro from "./components/basics/ComParametros";
import Fragmentos from "./components/basics/Fragmentos";
import Aleatorio from "./components/basics/Aleatorio";
import Card from "./components/layout/Card";
import Familia from "./components/basics/Familia";
import MembroFamilia from "./components/basics/MembroFamilia";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ParOuImpar from "./components/condicional/ParOuImpar";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import ComunicacaoDireta from "./components/comunicacao/DiretaPai";
import ComunicacaoIndireta from "./components/comunicacao/IndiretaPai";
import Input from "./components/formulario/Input";
import Contador from "./components/contador/Contador";
import Megasena from "./components/megasena/Megasena";

export default () => {
  return (
    <div id="App">
      <Card titulo="Mega-Sena" color="#00FF00">
        <Megasena />
      </Card>
      <Card titulo="Contador" color="#A52A2A">
        <Contador numeroInicial={10} />
      </Card>
      <Card titulo="Formulario" color="#FA8072">
        <Input />
      </Card>
      <Card titulo="Comunicação Indireta" color="#E9967A">
        <ComunicacaoIndireta />
      </Card>
      <Card titulo="Comunicação Direta" color="#FFA07A">
        <ComunicacaoDireta />
      </Card>
      <Card titulo="Informação do Usuário" color="#FF7F50">
        <UsuarioInfo usuario={{ nome: "Saitama" }} />
      </Card>
      <Card titulo="Par ou Impar" color="#FF6347">
        <ParOuImpar numero={5} />
      </Card>
      <Card titulo="Tabela de Produtos" color="#FF0000">
        <TabelaProdutos />
      </Card>
      <Card titulo="Lista de Alunos" color="#FF4500">
        <ListaAlunos />
      </Card>
      <Card titulo="Componente com Filho" color="#FF8C00">
        <Familia sobrenome="Stark">
          <MembroFamilia nome="Sansa" />
          <MembroFamilia nome="Arya" />
          <MembroFamilia nome="Bran" />
        </Familia>
      </Card>
      <Card titulo="Numero Aleatorio" color="#FFA500">
        <Aleatorio min={1} max={10} />
      </Card>
      <Card titulo="Fragmentos" color="#FFD700">
        <Fragmentos />
      </Card>
      <Card titulo="Componente com Parametros" color="#FFFF00">
        <ComParametro titulo="Titulo" subtitulo="Subtitulo" />
      </Card>
      <Card titulo="Primeiro Componente" color="#F0E68C">
        <Primeiro />
      </Card>
    </div>
  );
};
