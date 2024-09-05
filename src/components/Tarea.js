import React from "react"
import {AiFillCloseCircle} from "react-icons/ai";
import { IoIosCheckmarkCircle } from "react-icons/io";
import '.././estilos/tareas.css'

export function Tarea( { id, texto , completada , completarTarea , eliminarTarea } ){

    const tareaCompletada = completada? 'tarea-contenedor completada': 'tarea-contenedor'

/* me he quedat com passar el valor de completar tarea */
       return(
        <article className={tareaCompletada}>
            <aside className="tarea-texto">
                {texto}
            </aside>
            <aside className="tarea-contenedor-icono">
                <IoIosCheckmarkCircle className="tarea-icono" onClick={() => completarTarea(id)}/> 
                <AiFillCloseCircle className="tarea-icono" onClick={() => eliminarTarea(id)}/>  
            </aside>
        </article>


    )
}