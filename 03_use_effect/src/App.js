import logo from './logo.svg';
import './App.css';
import Prueba1 from './components/Prueba1';
import AjaxComponent from './components/AjaxComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Prueba1/>
        <AjaxComponent/>
      </header>
    </div>
  );
}

export default App;
