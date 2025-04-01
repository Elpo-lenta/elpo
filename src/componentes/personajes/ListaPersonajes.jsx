import { useState, useEffect } from "react";
import "./personajes.css";
import { fetchPersonajes} from "./api";
import { Link } from "react-router-dom";

function ListaPersonajes(){
    const [personajes, setPersonajes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchPersonajes();
                setPersonajes(data);
                setLoading(false);
                return data;
            } catch(error){
                console.error( error);
                setLoading(false);
            }
        };
    

    fetchData();


},  []);


return(
    <div>
        <h2> LIsta Personajes</h2>
        <p>Listado de personajes</p>
        {loading ? (
            <p> Cargando personajes...</p>
        ): (
            <ul className="personajes-lista">
                {personajes.map((personaje) =>(
                    <li key = {personaje.name} className="personaje-item">

                        <h3> {personaje.name}</h3>
                        <p> Casa:{personaje.house}</p>
                        <p> Actor:{personaje.actor}</p>
                        <Link to={`/DetallePersonaje/${personaje.id}`}> Ver detalle </Link>
                    </li>
                ))}
            </ul>
        )}
    </div>
)


}

export default ListaPersonajes;