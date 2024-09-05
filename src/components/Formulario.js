import React from "react";
import '.././estilos/formulario.css';

export function Formulario(props){
    return(
        <form className="tarea-formulario">
            <input 
                type="text" 
                className="tarea-input" 
                placeholder="Escribe una tarea"
            />
            <button className="tarea-boton">Add a task</button>
        </form>
    )
}