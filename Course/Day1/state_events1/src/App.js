import './App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
    super()

    this.HandleClick1 = this.HandleClick1.bind(this)
    this.state = {
      numberClicks: 0
    }
  }

  // HandleClick1() {
  //   this.setState({
  //     numberClicks: 1
  //   });
  // }


  HandleClick1() {
    this.setState((stateAnt, _props) => ({
      numberClicks: stateAnt.numberClicks + 1
    }));
  }
  
  render() {
    console.log(this)
    return <button onClick={this.HandleClick1} className='App'>{this.state.numberClicks}</button>
  }
}


export default App;
