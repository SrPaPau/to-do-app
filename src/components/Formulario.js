import React , { useState } from "react";
import '.././estilos/formulario.css';
import {v4 as uuidv4} from 'uuid';


export function Formulario(props){

    const [input, setInput] = useState('');

    const manejarCambio = e => {
        const valor = e.target.value;
        setInput(valor);
    }

    const manejarEnvio = e => {
        e.preventDefault();
        const tareaNueva = {
            id: uuidv4(),
            texto: input,
            completada : false
        }
        props.onSubmit(tareaNueva);

    }

    return(
        <form className="tarea-formulario" onSubmit={manejarEnvio}>
            <input 
                type="text" 
                className="tarea-input" 
                placeholder="Escribe una tarea"
                onChange={manejarCambio}
            />
            <button 
                className="tarea-boton">
                Add a task
            </button>
        </form>
    )
}