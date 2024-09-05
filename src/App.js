import './App.css';
import {ListaDeTareas} from './components/ListaDeTareas.js'

function App() {

  const texto = 'Comprar leche ';
  const tareaCompletada = true;
/*<Tarea texto={texto} completada={tareaCompletada}/>*/ 
  return (
    <div className="App">
      <h1>To Do App</h1>
      <div className='tareas-lista-principal'>
        <h2>My tasks</h2>
        <ListaDeTareas />
        
      </div>
    </div>
  );
}

export default App;
