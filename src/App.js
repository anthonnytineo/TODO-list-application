import React, { useState } from 'react';
import TareaForm from './componentes/TareaForm';
import Tarea from './componentes/Tarea';
import './App.css';

function App() {

  const [listaTareas, setListaTareas] = useState ([]);


  const nuevaTarea = (tarea) => {
    setListaTareas([...listaTareas, tarea])
  }


  const borrar = (id) => {
    const listaFiltrada = listaTareas.filter((e, index) => index !== id);
    setListaTareas(listaFiltrada);
  }

  return (
    <div className="App">
      <TareaForm 
      nuevaTarea={nuevaTarea}
      />

      {
        listaTareas.map((e, index) => <Tarea  
                              tarea={e}
                              borrar={borrar}
                              id={index}
                              />)
      }
    </div>
  );
}

export default App;
