import React, { useEffect } from 'react'

const Prueba2 = () => {

    useEffect(() => {
        alert("Se ha cargado el componentee");
        //Cuando el componente se desmonta, es decir, la condicion que teniamos para que se montase en el otro componente ya no existe.
        return () => {
            alert("Componente Desmontadoo.")
        }

    }, [])
  return (
    <div>
        <h1>Hemos superado los 20 cambios.</h1>
    </div>
  )
}

export default Prueba2