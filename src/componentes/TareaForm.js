import React, { useState } from 'react';
import '../App.css';

const TareaFrom = (props) => {

    const [inputText, setInputText] = useState("");

    const manejarFormulario = (event) => {
        setInputText(event.target.value);
    }

    const submit = (event) => {
        event.preventDefault();
        props.nuevaTarea(inputText);
    }


    return (
        <div>
            <form className="form" onSubmit={submit}>
                <span>Añadir tarea</span>
                <input value={inputText} onChange={manejarFormulario}/>
                <button>Añadir</button>
            </form>
        </div>
    )
};

export default TareaFrom;