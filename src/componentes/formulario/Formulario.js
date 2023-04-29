import { useState } from "react";
import "./Formulario.css";
import Campo from "../Campo";
import ListaOpciones from "../listaOpciones";
import Boton from "../Boton";

const Formulario = (props) => {
  const [nombre, actualizarNombre] = useState("")
  const [puesto, actualizarPuesto] = useState("")
  const [foto, actualizarFoto] = useState("")
  const [equipo, actualizarEquipo] = useState("")

  const [titulo, actualizarTitulo] = useState("")
  const [color, actualizarColor] = useState("")

  const {registrarColaborador, crearEquipo} = props //mejor manera de recirbir datos sin poner props.dato

  const manejarEnvio = (event) => {
    event.preventDefault(); //preventDefault hace que la pagina no se recargue al generar el evento
    console.log("Manejar el envio")
    let datosAEnviar = {
        nombre: nombre,
        puesto: puesto,
        foto: foto,
      
        equipo: equipo
    }
    registrarColaborador(datosAEnviar)
  }

  const manejarNuevoEquipo = (event) => {
    event.preventDefault()
    crearEquipo({titulo, colorPrimario:color})

  }

  return (
    <section className="formulario">
      <form onSubmit={manejarEnvio}>
        <h2>Fill in the form to create the collaborator.</h2>
        <Campo
          titulo="Name"
          placeholder="Enter Name"
          required
          valor={nombre}
          actualizarValor={actualizarNombre}
        />
        <Campo
          titulo="Position"
          placeholder="Enter Position"
          required
          valor={puesto}
          actualizarValor={actualizarPuesto}
        />
        <Campo
          titulo="photo"
          placeholder="Enter photo link"
          required
          valor={foto}
          actualizarValor={actualizarFoto}
        />
        <ListaOpciones 
        valor={equipo} 
        actualizarEquipo={actualizarEquipo}
        equipos={props.equipos}
        />
        <Boton texto="Create" />
      </form>
      <form onSubmit={manejarNuevoEquipo}>
        <h2>Fill in the form to create the team.</h2>
        <Campo
          titulo="Title"
          placeholder="Enter Title"
          required
          valor={titulo}
          actualizarValor={actualizarTitulo}
        />
        <Campo
          titulo="Color"
          placeholder="add color in Hex"
          required
          valor={color}
          actualizarValor={actualizarColor}
          type="color"
        />
        <Boton texto="add team" />
        </form>
    </section>
  );
};

export default Formulario;
