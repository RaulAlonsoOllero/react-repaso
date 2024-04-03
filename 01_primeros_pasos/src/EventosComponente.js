import React from 'react'

const EventosComponente = () => {

    const hasDadoClick = (e,nombre) => {
        alert("Has dado click al Boton!!" + nombre)
    }
    function hasDadoDobleClick(e){
        alert("has dado dobe click")
    }

  return (
    <div>
        <h1>Eventos en los componentes</h1>
        {/* Evento click*/}
        <button onClick = { e =>  hasDadoClick(e,"Raul")}>Dame click</button>
        <button onDoubleClick = { e =>  hasDadoDobleClick()}>Dame click 2 veces</button>
    </div>
  )
}

export default EventosComponente