import React from "react";

export default function CEPDados(props) {
  const { cepDados } = props
  const keys = Object.keys(cepDados)
  const elements = keys.map((key, index) => (
    <span key={index}><b>{key}: </b>{cepDados[key]}</span>         
  ))
  return <>{ elements } </>
}