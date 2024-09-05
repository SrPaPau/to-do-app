import React , { useState } from "react";
import '../estilos/listaDeTareas.css'
import { Formulario } from "./Formulario.js";
import { Tarea } from "./Tarea.js"

export function ListaDeTareas(){

    const [tareas, setTareas] = useState([]);

 

    return(
        <>
            <Formulario />
            <div className="tareas-lista-contenedor">
                {
                    tareas.map((tarea) => 
                        <Tarea texto={tarea.texto} completada={tarea.completada}/>
                    )
                }
            </div>
        </>
    )
}