import "./Seccion.css";
import curso from '../../assets/img/curso.png'
import Boton from "../boton/Boton";
import Contador from "../boton/Contador";
import ListaCursos from "../Cursos/ListaCurso";


const handlerClicBoton = () => {
    alert('Hiciste click en el botón')
}

function Seccion() {
    return (
        <section className="seccion">
            <h2> Informacion sobre la institucion</h2>
            <p>Los cursos de adultos están destinados a alumnos a partir de 17 años, divididos en niveles Senior 1 a 6 y Talleres de Conversación para diferentes niveles </p>
            <div className="contenedor-img">
                <img src={curso} alt="" />
                <Contador />
                <Boton texto="Leer más" />
                <Boton color="pink" texto="Inscripcion" onClick={handlerClicBoton} />
            </div>

            

        </section>
    );
}
export default Seccion;