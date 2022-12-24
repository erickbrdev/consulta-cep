import React from 'react'

export default function Resultados(props) {
   const result = props.result  

  const keys = Object.keys(result)

  const elements = keys.map((key, index) => (
    <span key={index}><b>{key}: </b>{result[key]}</span>         
  ))

  return (
    <div className="App">
      <header className="App-header">       
        <span>Resultados para o CEP 16075-420</span>
        {elements}
        <button>Consultar novamente</button>    
      </header>
    </div>
  )
}