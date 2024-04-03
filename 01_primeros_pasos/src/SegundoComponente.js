import React from 'react'

const SegundoComponente = () => {
    //const libros = ["Harry Potter", "Juego de Tronos", "Clean Code"];
    const libros = [];
  return (
    <>
    <div className='segundo-componente'>
        <h1>
            listado de libros
        </h1>
        {
            //aqui vamos a hacer basicamente un if
            //este condicional siguiente es basicamente decir:
            /* 
            (if libros.lenght >= 1){
                trozo de codigo
            }
            */
         libros.length >= 1 ?(
        
        <ul>
            {
                //vamos a hacer aqui un bucle 
                /* Diferencias entre el ForEach y el map en react:

                    forEach se usa principalmente cuando necesitas ejecutar una acción para cada elemento de una lista sin necesariamente renderizar componentes de React 
                    o cuando necesitas realizar alguna operación en el estado o en los props de los componentes.

                    map se utiliza típicamente para renderizar listas de elementos en JSX. Al devolver un nuevo array con elementos transformados, 
                    es ideal para generar una lista de componentes React basados en una lista de datos.

                    En resumen, forEach es útil para iteraciones simples y acciones que no requieren la creación de un nuevo array,
                    mientras que map es más adecuado cuando necesitas transformar los elementos de un array y renderizar una lista de componentes en React.

                    Aqui por ejemplo utilizaremos map, ya que necesitamos iterar sobre un array simplre:
 */ 
                libros.map( (libro,index) => {
                    return <li key={index}>{libro}</li>
                })
            }
        </ul>)
        ://esto es basicamente un else
        <p>no hay libros</p>
    }
    </div>
    </>
  )
}

export default SegundoComponente