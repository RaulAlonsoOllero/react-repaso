import logo from './logo.svg';
import './App.css';
import PrimerComponente from './PrimerComponente';
import SegundoComponente from './SegundoComponente';
import TercerComponente from './TercerComponente';
import EventosComponente from './EventosComponente';

function App() {
  let ficha = {
    altura:"180",
    edad:"24 años",
    peso:"78 kg"
  }
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
        <PrimerComponente/>
        <hr></hr>
        <SegundoComponente/>
        <hr></hr>
        <TercerComponente nombre="raul" apellido="alonso" ficha_medica = {ficha}/>
        <hr></hr>
        <EventosComponente/>
      </header>
      
    </div>

  );
}

export default App;
