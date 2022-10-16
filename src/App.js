import './App.css';
import HelloWorld from './components/HelloWorld.js';

function App() {
  const name = 'Moises'
  const newName = name.toUpperCase();

  function sum(a, b){
    return a + b
  }

  const url = 'https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_720/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/t9ur9cc1khkup1dmcbzd/IMGWorldsofAdventure.webp'

  return (
    <div className="App">
      <h1>Olá, {newName}</h1>
      <p>Soma: {sum(1, 5)}</p>
      <img src={url} alt='teste' width='150' height='150'></img>
      <HelloWorld/>
    </div>
  );
}

export default App;
