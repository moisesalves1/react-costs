import './App.css';
import HelloWorld from './components/HelloWorld.js';
import Pessoa from './components/Pessoa';
import SayMyName from './components/SayMyName';

function App() {
  const name = 'Moises Alves'

  return (
    <div className="App">
      <SayMyName nome={name}/>
      <HelloWorld />
      <Pessoa 
        nome="Moises"
        idade='24'
        profissao='programador'
        foto='https://www.42frases.com.br/wp-content/uploads/2016/11/frases-para-fotos-1-1.jpg' />
    </div>
  );
}

export default App;
