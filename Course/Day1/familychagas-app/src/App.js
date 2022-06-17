import React from 'react';

const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  )
}

const tarefas = ['Descansar', 'Ler', 'Estudar', 'Aplicar'];

class App extends React.Component {
  render() {
    return (
      <ol>{ tarefas.map(tarefas => Task(tarefas)) }</ol>
    );
  }
}

  export default App;
  