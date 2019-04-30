import React, { Component } from 'react';
import { render } from 'react-dom'

class App extends Component {
  render() {
    return (
      <div>
        <h1> Base para o Desafio configurado</h1>
        <p>Configure uma estrutura ReactJS do zero com Babel, Webpack e Webpack Dev Server. Além
disso, utilize as ferramentas ESLint, EditorConfig e Prettier durante o desenvolvimento</p>
      </div>)
  }
}

render(<App />, document.getElementById('app'));
