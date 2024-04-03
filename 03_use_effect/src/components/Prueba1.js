import React, { useEffect, useState } from 'react'
import Prueba2 from './Prueba2'

const Prueba1 = () => {
    /* 
        El useEffect es un hook que sirve para que cada vez que hay un cambio en algún estado de un componente,
        en el mismo componente se produzca un efecto desencadenado por ese cambio.

        Por ejemplo, si queremos que una funcion se ejecute nada más cargar la aplicacion, usaremos un useEffect.
        Pero, ademas si cada vez que hay un cambio de estado de cualquier variable del componente, tambien se ejecutará el useEffect.
    */
    const [usuario,setUsuario] = useState("Raul")
    const [contador, setContador] = useState(0)
    const modUsuario = e =>{
        setUsuario(e.target.value);
    }
    //Si ponemos los corchetes "[]" vacios al final del useState, este solo cargará cuando empiece la aplicación.
    useEffect(() => {
        console.log("se ha hecho un cambio")
    }, [])

    //En este useEffect, se cambiara cuando cambiemos el usuario por ejemplo
    useEffect(() => {
        console.log("se ha hecho un cambio en el usuario")
        setContador(contador + 1)
    }, [usuario])
  return (
    <div>
        <h1>El efecto useEffect</h1>
        <strong>{usuario}</strong>
        <hr></hr>
        <strong className={ contador >= 10 ? '' : 'background-blue'} >Numero de cambios {contador}</strong>
        <form>
            <input type="text"
                    onChange={modUsuario}
                    placeholder='Cambiar el Nombre'/>
        </form>

         {
            //ir a prueba 2 para ver que hemos hecho con useEffect.
         }
        {contador >= 20 || usuario == "alonso" ?  <Prueba2/> : console.log("no pasa nada")}
    </div>
  )
}

export default Prueba1