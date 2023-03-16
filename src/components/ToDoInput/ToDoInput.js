import React from 'react'
import './ToDoInput.css';

const TodoInput = ({onSubmit, onChange,value}) => {
  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="text" 
        placeholder='Ingrese la Tarea' 
        onChange={onChange}
        value={value}
        autoComplete='off'/>
        <button id="bot" type='submit'>Agregar Tarea</button>
      </form>
    </>
  )
}
export default TodoInput;