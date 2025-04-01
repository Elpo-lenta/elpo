import { useState, useEffect } from "react";
import "./personajes.css";
import { fetchPersonajeById } from "./api";
import { useParams } from "react-router-dom"

function DetallePersonaje() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [personaje, setPersonaje] = useState({});


    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchPersonajeById(id);
                setPersonaje(data);
                setLoading(false);     
            } catch (error) {
                console.error("Error en detalles personaje", error);
                setLoading(false);
            }
        };


        fetchData();


    }, [id]);
    if (loading) {
        return <div> Cargando...</div>;
    } else {
        return (
            <div>
                    <h2> Detalle Personaje</h2>
                    <p>Nombre:{personaje.name}</p>
                    <p> Casa:{personaje.house}</p>
                    <p>Especie: {personaje.species}</p>
                    <p>Patronus: {personaje.patronus}</p>
                    <img src={personaje.image} alt={personaje.name} />
            </div>
        )


    }
}
export default DetallePersonaje;
