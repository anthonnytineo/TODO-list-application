import React, { useState } from 'react';
import '../App.css';

const TareaFrom = (props) => {

    const [inputText, setInputText] = useState("");

    const manejarFormulario = (event) => {
        setInputText(event);
    }

    const submit = (event) => {
        event.preventDefault();
        props.nuevaTarea(inputText);
    }


    return (
        <div>
            <form className="form" onSubmit={submit}>
                <h1>todos</h1>
                <input value={inputText} onChange={manejarFormulario}/>
            </form>
        </div>
    )
};

export default TareaFrom;