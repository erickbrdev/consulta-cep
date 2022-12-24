import React, {useState, useEffect} from 'react'
import consultarCep from "cep-promise"
import CEPDados from '../Reutilizavel/CEPDados'

function numbersOnly(str) {
  return str.replace(/[^\d]/g, '')
}

function translate(cepDados) {  
    return {
      Estado: cepDados.state,
      Cidade: cepDados.city,
      Bairro: cepDados.neighborhood,
      Logradouro: cepDados.street } 
}

export default function Pesquisa(props) {
  const { redirect, setResultado, setError, ticket } = props 
  const [cepNumber, setCepNumber] = useState("");  
  const [cepFavorito, setCepFavorito] = useState("")
  const [cepDados, setCepDados] = useState({})

  useEffect(() => {
    const storageCep = localStorage.getItem("cepFavorito") || ""
    setCepFavorito(storageCep);
  }, [])

  useEffect(() => {
    if(!cepFavorito) {
      return;
    }
     localStorage.setItem("cepFavorito", cepFavorito);
     consultarCep(cepFavorito)
      .then(resultado => setCepDados(resultado))
      .catch(error => setCepDados({"Erro": error.message}))
  }, [cepFavorito])

  function handleSucess(cepDados) {
    const resultado = translate(cepDados)
     
    setResultado(resultado)
    redirect("RESULTADOS")
  }
  
  function handleError(error){
    const errorMessage = error.message;
    setError(errorMessage)
    redirect("ERROR")
  }

  function handleSearch() {
    ticket.current++;
    const currentTicket = ticket.current;
    redirect("CARREGANDO")
    consultarCep(cepNumber)
      .then(result => currentTicket === ticket.current && handleSucess(result))
      .catch(error => currentTicket === ticket.current && handleError(error));    
  }

  function handleFavorite() {
    localStorage.setItem("cepFavorito", cepNumber);   
    setCepFavorito(cepNumber); 
  }

  return (   
    <>       
      <p>Digite o CEP para efetuar a consulta.</p>        
      <input
        value={numbersOnly(cepNumber)}
        onChange={({target}) => setCepNumber(numbersOnly(target.value)) }
      />      
      <button onClick={() => handleSearch()}>Consultar</button>  
      <button onClick={() => handleFavorite()}>Favoritar</button>   
      <br />
      <p>Favorito: {cepFavorito}</p>
      <CEPDados cepDados ={translate(cepDados)} /> 
    </>    
  )
}