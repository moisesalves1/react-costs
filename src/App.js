import './App.css';
import Frase from './components/Frase';
import List from './components/List';
import Pessoa from './components/Pessoa';
import SayMyName from './components/SayMyName';

function App() {
  const name = 'Moises Alves'

  return (
    <div className="App">
      <Frase />
      <SayMyName nome={name}/>
      <SayMyName nome='Estático'/>
      <Frase />
      <Pessoa 
        nme="Moises"
        idade='24'
        profissao='programador'
        foto='https://via.placeholder.com/150' />
      <List/>
    </div>
  );
}

export default App;
