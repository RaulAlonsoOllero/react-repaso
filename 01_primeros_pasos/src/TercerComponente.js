import React from 'react'
import PropTypes from "prop-types"

const TercerComponente = ({nombre,apellido,ficha_medica}) => {
   
  return (
    <div>
        <h1>Comunicacion entre componentes</h1>
        <ul>
            <li>{nombre}</li>
            <li>{apellido}</li>
            <li>{ficha_medica.peso}</li>
        </ul>
    </div>
  )
}

TercerComponente.propTypes = {
    nombre : PropTypes.string.isRequired,
    apellido : PropTypes.string,
    ficha : PropTypes.object
}

export default TercerComponente