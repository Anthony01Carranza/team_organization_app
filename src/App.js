import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import Header from "./componentes/Header/Header";
import Formulario from './componentes/formulario/Formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';




function App() {
const [mostrarFormulario,actualizarMostrar] = useState(true)
const [colaboradores, actualizarColaboradores] = useState ([{
  id: uuid(),
  equipo:"Front End",
  foto:"https://github.com/Anthony01Carranza.png",
  nombre:"anthony Carranza",
  puesto:"Specialized Technician",
  fav: true
},
{
  id: uuid(),
  equipo:"Programming",
  foto:"https://bi.im-g.pl/im/11/8d/19/z26793489AMP,Bill-Gates--1-lutego-2018.jpg",
  nombre:"Bill Gates",
  puesto:"Software Developer",
  fav: true
},
{
  id: uuid(),
  equipo:"UX and Design",
  foto:"https://pentagram-production.imgix.net/b98dac18-7131-490e-ae30-486df1abf571/paula_scher_1500x1500.jpg",
  nombre:"Paula Scher",
  puesto:"Manager",
  fav: true
},
{
  id: uuid(),
  equipo:"Programming",
  foto:"https://akns-images.eonline.com/eol_images/Entire_Site/2014914/rs_1024x759-141014083909-1024-Mark-Zuckerberg-ebola.ls.101414.jpg",
  nombre:"Mark Zuckerberg",
  puesto:"Specialized",
  fav: false
},
{
  id: uuid(),
  equipo:"Innovation and Management",
  foto:"https://www.elcorreo.com/xlsemanal/wp-content/uploads/sites/5/2021/07/jeff-bezos-el-amo-del-mundo.jpg",
  nombre:"JEFF BEZOS",
  puesto:"SEO",
  fav: false
}]) 

const [equipos, actualizarEquipos] = useState ([
  {
    id: uuid(),
    titulo:"Programming",
    colorPrimario: "#57C278",
    colorSecundario: "#D9F7E9"
  },
  {
    id: uuid(),
    titulo:"Front End",
    colorPrimario: "#82CFFA",
    colorSecundario: "#E8F8FF"
  },
  {
    id: uuid(),
    titulo:"Data Science",
    colorPrimario: "#A6D157",
    colorSecundario: "#F0F8E2"
  },
  {
    id: uuid(),
    titulo:"Developer",
    colorPrimario: "#E06B69",
    colorSecundario: "#FDE7E8"
  },
  {
    id: uuid(),
    titulo:"UX and Design",
    colorPrimario: "#DB6EBF",
    colorSecundario: "#FAE9F5"
  },
  {
    id: uuid(),
    titulo:"Mobile",
    colorPrimario: "#FFBA05",
    colorSecundario: "#FFF5D9"
  },
  {
    id: uuid(),
    titulo:"Innovation and Management",
    colorPrimario: "#FF8A29",
    colorSecundario: "#FFEEDF"
  }



])




//Ternario --> condicion ? seMuestra : noSeMuestra
// condicion && seMuestra

const cambiarMostrar = () => {
  actualizarMostrar(!mostrarFormulario)
}

//Registart colaborador

const registrarColaborador = (colaborador) => {
  console.log("Nuevo Colaborador", colaborador)
  //Spread operator
  actualizarColaboradores([...colaboradores, colaborador])
}

//Eliminar Colaborador

const eliminarColaborador = (id) => {
  console.log("Eliminar colaborador", id)
  const nuevosColaboradores = colaboradores.filter((colaborador) => {
    return colaborador.id !== id
  })
  actualizarColaboradores(nuevosColaboradores)
} 

//Actualziar color de equipo

const actualizarColor = ( color, id) => {
  console.log("Actualizar: ", color,id)
  const equiposActualizados = equipos.map ((equipo) => {
    if(equipo.id === id){
      equipo.colorPrimario = color
    }
    return equipo
  })
  actualizarEquipos(equiposActualizados)
}

//Crear Equipo
const crearEquipo = (nuevoEquipo) => {
  
  actualizarEquipos([...equipos,{ ...nuevoEquipo, id: uuid() }])

}

const like = (id) => {
  console.log("like", id)
  const colaboradoresActualizados = colaboradores.map((colaborador) => {
    if(colaborador.id === id) {
      colaborador.fav = !colaborador.fav
    }
    return colaborador
  })

  actualizarColaboradores(colaboradoresActualizados)
}

  return (
    <div>
      <Header />
      {/* { mostrarFormulario === true ? <Formulario /> : <></>}  opcion 2 */}
      { 
        mostrarFormulario && <Formulario 
          equipos={equipos.map((equipo) => equipo.titulo )} 
          registrarColaborador= {registrarColaborador}
          crearEquipo = {crearEquipo}

          />
      } 


      <MiOrg cambiarMostrar={cambiarMostrar}  />
      {
        equipos.map((equipo) => <Equipo 
          datos={equipo} 
          key={equipo.titulo}
          colaboradores={colaboradores.filter( colaborador => colaborador.equipo === equipo.titulo)}
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
          like={like}
        />
        )
      }

      <Footer />

    </div>
  );
}

export default App;
