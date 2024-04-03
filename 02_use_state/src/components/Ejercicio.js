import React, { useState } from 'react'

const Ejercicio = ({año}) => {
    
    const [year, setAño] = useState(año)

    function añoSiguiente(){
         setAño(year+1)
    }

    function añoAnterior(){
        setAño(year-1)
        
    }
  return (
    <div>
        <h1>Ejercicio</h1>
        <h3>{year}</h3>
        <hr></hr>
        <button onClick={añoAnterior}>Año anterior</button>
        <button onClick={añoSiguiente}>Año siguiente</button>
    </div>
  )
}

export default Ejercicio