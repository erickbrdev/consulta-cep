import React from 'react'

export default function Error(props) {
  const { errorMessage } = props
  return (
    <div className="App">
      <header className="App-header">       
        <p>Erro na consulta</p>   
        <p>{errorMessage}</p> 
      </header>
    </div>
  )
}