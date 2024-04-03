import logo from './logo.svg';
import './App.css';
import PrimerEstado from './components/PrimerEstado';
import Ejercicio from './components/Ejercicio';

function App() {
  let año = Date.now();
  let añoActual = new Date(año);
  let soloAño = añoActual.getFullYear();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>el estado en react</h1>
        <PrimerEstado/>
        <hr></hr>
        <Ejercicio  año = {soloAño} />
      </header>
    </div>
  );
}

export default App;
