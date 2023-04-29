import "./MiOrg.css"

const MiOrg = (props) => {
    //Estado - hooks
    //useState
    // const [nombreVariable,funcionActualiza] = useState(valorInicial)
    
    //const manejarClick = () => {
    //    console.log("Mostrar/Ocultar elemento")
    //}
    return <section className="orgSection">
        <h3>My organization</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar} />
    </section>
}

export default MiOrg