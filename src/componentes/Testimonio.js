import React from 'react';
import '../hojas-de-estilo/Testimonio.css'; 

function Testimonio(props) { //recibimos propiedades con props
  return (
    <div className='contenedor-testimonio'>
      <img
        className='imagen-testimonio'
        //src={require('../imagenes/testimonio-Emma.png')} METODO NORMAL-IMAGENES
        src={require(`../imagenes/testimonio-${props.imagen}.png`)} //plantillas literales
        alt='Foto de Emma'/>
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'>
          <strong>{props.nombre}</strong> en {props.pais}</p>
        <p className='cargo-testimonio'>{props.cargo} en {props.empresa}</p>
        <p className='texto-testimonio'>{props.testimonio}</p>
      </div>
    </div>
  );
}

export default Testimonio; //Exportamos por defecto

/*nombrada, se puede exportar varios de un mismo archivo
defecto solo uno

-Necesitmaos los props es ayudar a crear componntes reusables*/