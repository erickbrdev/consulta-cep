import React from 'react'

export default function Error(props) {
  const { errorMessage, redirect } = props
  return (
    <>
      <p>Erro na consulta</p>   
      <p>{errorMessage}</p> 
      <button onClick={() => redirect("PESQUISA")}>Voltar</button>  
    </>
  )
}