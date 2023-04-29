import "./Equipo.css"
import Colaborador from "../Colaborador"
import hexToRgba from 'hex-to-rgba';

const Equipo = (props) => {
    //Destructuracion
    const {colorPrimario, titulo,id } = props.datos
    const {colaboradores, eliminarColaborador, actualizarColor, like} = props
    const background = {
        backgroundColor: hexToRgba(colorPrimario, 0.6) 
    }


    const styleTitulo = { borderColor: colorPrimario }

    return <> 
    { colaboradores.length > 0 &&
    <section className="equipo" style={background}>
        <input 
            type="color"
            className="input-color"
            value={ colorPrimario  }
            onChange={(event) => {
                actualizarColor(event.target.value, id) //es para ver el valor exacto 

            }}

        />
        <h3 style={styleTitulo}>{titulo}</h3>
        <div className="colaboradores">
            
            {
                colaboradores.map( (colaborador, index) => <Colaborador 
                datos={colaborador} 
                key={index} 
                colorPrimario={colorPrimario}
                eliminarColaborador={eliminarColaborador}
                like={like}
                />) //para evitar que el key tenga conflictos se recomienda poner index que es una funcion de javascript es por eso que se utiliza algunas veces
            }
        </div>
    </section>
    }</>
}

export default Equipo