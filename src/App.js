import './App.css';
import Pesquisa from './Components/Pesquisa';
import Carregando from './Components/Carregando';
import Resultados from './Components/Resultados';
import Error from './Components/Error';

function App() {  
  return (
    <div>
      <button>Prox tela</button>
      <Resultados result={{
        Rua: "Prado",
        Cidade: "Via Lagos",  
        Estado: "RJ"   
      }}/>
    </div>
  );
}

export default App;
