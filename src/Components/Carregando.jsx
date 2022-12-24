import React from 'react'

export default function Carregando(props) {
  const { redirect, ticket } = props

  function handleCancel() {
    ticket.current++;
    redirect("PESQUISA")
  }
  return (
    <>
      <p>Carregando resultados...</p>
      <button onClick={() => handleCancel()}>Cancelar</button>  
    </>
  )
}