import { useState, useRef } from 'react';
import './App.css';
import Pesquisa from './Components/Pesquisa';
import Carregando from './Components/Carregando';
import Resultados from './Components/Resultados';
import Error from './Components/Error';

function App() {   
  const [tela, setTela] = useState("PESQUISA");
  const [resultado, setResultado] = useState({});
  const [error, setError] = useState("");
  const ticket = useRef(1);
 
  function goTo(tela) {   
    setTela(tela);
  }
  
  return (
    <div>      
      <div className="App">
        <header className="App-header">       
          {tela === "PESQUISA" && <Pesquisa redirect={goTo} setResultado={setResultado} setError={setError} ticket={ticket}/>}
          {tela === "RESULTADOS" && <Resultados result= {resultado} redirect={goTo}/>}
          {tela === "ERROR" && <Error errorMessage={error} redirect={goTo}/>}
          {tela === "CARREGANDO" && <Carregando redirect={goTo} ticket={ticket}/>}
        </header>      
      </div>
      
    </div>
  );
}

export default App;
