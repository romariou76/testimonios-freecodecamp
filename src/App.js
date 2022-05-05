import './App.css'
import Testimonio from './componentes/Testimonio.js';
function App() {                //este contenedor esta renderizando el componente testimonio
  return (
    <div className="App"> 
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1> 
        <Testimonio />
      </div>
    </div>
  );
}

export default App;
