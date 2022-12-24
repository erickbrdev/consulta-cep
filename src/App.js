import { useState } from 'react';
import './App.css';
import Pesquisa from './Components/Pesquisa';
import Carregando from './Components/Carregando';
import Resultados from './Components/Resultados';
import Error from './Components/Error';

function App() { 
  const [numTela, setNumTela] = useState(0);

 
  function handleClick() {
    setNumTela((numTela + 1) % 4)   
  }
  
  return (
    <div>
      <button onClick={() => handleClick()}>Prox tela</button>
      {numTela === 0 && <Pesquisa/>}
      {numTela === 1 && <Resultados result= {{
        Rua: 'Prado'
      }}/>}
      {numTela === 2 && <Error errorMessage="CEP não localizado"/>}
      {numTela === 3 && <Carregando/>}
    </div>
  );
}

export default App;
