import Curso from "./Curso";
import cursos from "./datosCursos";


function ListaCursos(){

    return(
        <div>
            {cursos.map((curso, index) => (
                <Curso
                key ={index}
                nombre={curso.nombre}
                precio= {curso.precio}
                stock= {curso.stock}
                codigo= { curso.codigo}
                imagen= {curso.imagen}
                />
            ))}
        </div>
    );
}


export default ListaCursos;