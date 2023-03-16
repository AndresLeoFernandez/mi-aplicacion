import React from 'react'
import './ListaToDo.css';

import ToDoItem from '../ToDoItem/ToDoItem';

const ListaToDo = ({tareas,onClick}) => {
  return (
    <div>
      <h2>Listado de TAREAS INGRESADAS</h2>
      <div className="items-list">
        {
            tareas.map( (tarea,index) => { 
              return (
                <div className={"fila-"+(index+1)} key={index+1}><span className='tarea'> <ToDoItem tarea={tarea}/> </span>
                  <button title="Eliminar Tarea" className={"remove btn-"+(index+1)} onClick={() => onClick(index)}>
                  <span>X</span></button>
                </div>)
            })
        }
      </div>
    </div>
  )
}

export default ListaToDo
