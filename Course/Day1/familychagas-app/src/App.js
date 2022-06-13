import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const task = (value, value1, value2, value3, value4) => {
  return (
    <li>{value}</li>;
    <li>{value1}</li>;
    <li>{value2}</li>;
    <li>{value3}</li>;
    <li>{value4}</li>;
}

export default App;
