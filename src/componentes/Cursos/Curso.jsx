function Curso(props) {
    return ( 
        <section className="seccion">
            <h2>{props.nombre} </h2>
            <p> {props.precio} </p>
            <p> {props.stock} </p>
            <p> {props.codigo}</p>
            <div>
            <img className="contenedor-img" src={props.imagen} alt="" />
            </div>


        </section>

    );
}
export default Curso;