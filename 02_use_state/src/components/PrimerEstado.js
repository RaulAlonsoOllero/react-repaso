import React ,{useState}from 'react'

const PrimerEstado = () => {

    // La funcion useState se utiliza para cambiar de estado las variables de algun componente.
    // Por ejemplo, si tenemos una variable nombre, y la ponemos en la pantalla, y queremos cambiar su valor haciendo click en un boton, debemos utilizar el useState.
    // Se compone de dos propiedades:
    //      Estado: es la variable que queremos cambiar. Viene definida por defecto con un estado.
    //      Funcion de cambio de estado: Nos permite cambiar el estado de la variable
    const [nombre, setNombre] = useState("Raul Alonso")
    const cambiarNombre = (e, nombreFijo) => {
      
      nombre === "Raul Alonso" ?
        setNombre(nombreFijo)
      :
      setNombre("Raul Alonso");
    }
  return (
    <div>
        <h3>Componente: Mi primer estado</h3>
        <strong>{nombre}</strong>
        <button onClick={cambiarNombre}>Cambiar nombre</button>
        <hr></hr>
        <input type="text" onKeyUp={ e => cambiarNombre(e, e.target.value)} placeholder="cambiar Nombre"/>
    </div>
  )
}

export default PrimerEstado