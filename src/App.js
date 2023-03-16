import {useState} from 'react'
import './App.css';
import ToDoInput from './components/ToDoInput/ToDoInput';
import ListaToDo from "./components/ListaToDo/ListaToDo";

function App() {
  const [userInput, setUserInput] = useState('');
  const [tareas, setTareas] = useState([]);  
  
  const agregarTareas = (e) => {
    e.preventDefault();
    const noTareaVacia = userInput.trim()
    if (noTareaVacia) {
      setTareas([...tareas,userInput]);
    }
    setUserInput("");
  }

  const handleChange = (e) => {
    console.log(e.target.value);
    setUserInput(e.target.value);
  }
  
  const eliminarTarea = (indice) => {
    setTareas((todasLasTareas) => todasLasTareas.filter((item, i) => indice !== i));
  }

  return (
    <div className="App">      
      <main>
        <h1>APP LISTA </h1>
        <p>Ingrese tareas en el campo de texto e incorporalas al listado dando un click sobre el Boton <strong>"Agregar Tareas"</strong>.<br/>
        Luego tendras la opción de poder eliminarlas en caso de ser necesario.</p>
        <div className="contenedor">
          <ToDoInput onSubmit={agregarTareas} onChange={handleChange} value={userInput} />
        </div>
        <ListaToDo tareas={tareas} onClick={eliminarTarea} />
      </main>
      <footer>
          <span>Realizado por Andrés Fernández - 2023</span>
      </footer>
    </div>
  );
}

export default App;