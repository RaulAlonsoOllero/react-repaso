import React, { useEffect, useState } from 'react'

const AjaxComponent = () => {

    const [usuario,setUsuario] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
       // getUsuariosAjaxPms()
       getUsuariosAjaxAW()
    }, [])

    const getUsuariosAjaxPms = () => {
        fetch ("https://reqres.in/api/users?page=1")
        .then(answer => answer.json())
        .then(final_answer => {
            setUsuario(final_answer.data)
            
        },
        error => {
            console.log(error)
        })
       
    }

    const getUsuariosAjaxAW = () => {
        //esto significa que a los 2000 milisegundos hara algo.
        setTimeout(async() => {
            const peticion = await fetch("https://reqres.in/api/users?page=1");
            //esto es lo mismo que decir peticion.data.
            const {data} = await peticion.json()
            setUsuario(data)
            setLoading(false)
        }, 2000)


    }
    if (loading == true){
        
        return (
            <div className='cargando'>
                Cargando datos...
            </div>
        );
    }
    else{
         // trozo de plantilla ideal, cuando ha ido todo bien.
            return (
                <div>
                    <h2>Listado de componentes via Ajax</h2>
                    <ol>
                        {
                            usuario.map(usuarios => {
                                return <li key={usuario.key}>{usuarios.first_name}</li>
                            })
                        }
                    </ol>
                    
                </div>
            )
    }
   
}

export default AjaxComponent