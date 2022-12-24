import React from 'react'
import CEPDados from '../Reutilizavel/CEPDados'

export default function Resultados(props) {
   const {result, redirect} = props

  return (
    <>            
      <span>Resultados para o CEP {result.cep}</span>
       {<CEPDados cepDados = { result }/>}
      <button onClick={() => redirect("PESQUISA")}>Consultar novamente</button>        
    </>
  )
}