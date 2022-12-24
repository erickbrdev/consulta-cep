import React from 'react'

export default function Pesquisa() {
 
  return (
    <div className="App">
      <header className="App-header">       
        Digite o CEP para efetuar a consulta.
        <input 
          type="text"
        />
        <button>Consultar</button>    
      </header>
    </div>
  )
}