//importar modulos de react
import React from 'react'

//functiones y constantes del componente
const PrimerComponente = () => {

  let nombre = "Raul";
  let web = "Raul Alonso web";
  let usuario = {
    nombre:"Raul",
    apellido1:"Alonso",
    apellido2:"Ollero"
  }
  console.log(usuario);
  return (
    <div>primerComponente
      <h2>Datos mios : </h2>
      <ul>
        <li>
          {nombre}
        </li>
        <li>
          {usuario.apellido1}
        </li>
        <li>
          {web}
        </li>
      </ul>
    </div>
    
  )
}

export default PrimerComponente