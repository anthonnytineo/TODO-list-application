import React from 'react';
import '../App.css';




const Tarea = (props) => {

    const borrarTarea = () => {
        props.borrar(props.id);
    }



    return (
        <div className="tarea">
            <span>{props.tarea}</span><span onClick={borrarTarea}>X</span>
        </div>
    )
}


export default Tarea;