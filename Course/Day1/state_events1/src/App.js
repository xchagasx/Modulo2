import './App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
    super()

    this.HandleClick1 = this.HandleClick1.bind(this)

    console.log('Comp in Constr..')
  }

  HandleClick1() {
    console.log(this)
    console.log('Click 1')
  }

  
  render() {
    console.log(this)
    return <button onClick={this.HandleClick1} className='App'>Click Me</button>
  }
}


export default App;
