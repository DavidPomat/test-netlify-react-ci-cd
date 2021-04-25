import logo from './logo.svg';
import './App.css';
import Name from './components/name';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenidos al Himalaya 
        </p>
        <Name realName="poma"/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React2
        </a>
      </header>
    </div>
  );
}

export default App;

