import './App.css';
import HelloWorld from './components/HelloWorld.js';
import Pessoa from './components/Pessoa';
import SayMyName from './components/SayMyName';

function App() {
  const name = 'Moises Alves'

  return (
    <div className="App">
      <SayMyName nome={name}/>
      <Pessoa 
        nome="Moises"
        idade="24"
        profissao="Programador"
        foto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDTTKabtgp5U6vNioZmPQVzc7Vcl30lAD-Pg&usqp=CAU"/>
    </div>
  );
}

export default App;
