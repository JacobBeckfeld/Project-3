import logo from './logo.svg';
import './App.css';
import { Jumbotron } from 'reactstrap';

function App() {
  return (
    <div className="App">
      <Jumbotron>
        <h1 className="display-3">Diablo III</h1>
        <p className="lead">Howdy, you like Diablo.</p>
      </Jumbotron>
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

export default App;
