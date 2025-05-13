import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


export const Personaje = () => {
    const [personaje, setPersonaje] = useState(null);
    const { id } = useParams();
    console.log(id)
    

    useEffect(() => {
        console.log("ID recibido:", id);
        getPersonaje()
    }, [id]);

    async function getPersonaje() {
        try {
            const response = await fetch(`https://swapi.tech/api/people/${id}`);
            console.log("Respuesta fetch:", response);
            const data = await response.json();
            console.log("Datos recibidos:", data);
            setPersonaje(data.result.properties);
        } catch (error) {
            console.error("Error al cargar personajes:", error);
        }
    };

    

    return (
        <div className="container">
            <div className="d-flex flex-column mt-3 ">
                <div className="d-flex ">
                    <div>
                        <img className="me-5 rounded" style={{ width: "30rem" }} src="https://wallpapers.com/images/featured/fondos-de-star-wars-vdgqv4b95q9ur6ak.jpg" alt="Character" />
                    </div>
                    <div>
                        {personaje ? (
                            <>
                                <h1 className="mb-3">{personaje.name}</h1>
                                <p>Height : {personaje.height}</p>
                                <p>Mass : {personaje.mass}</p>
                                <p>Birth Year : {personaje.birth_year}</p>
                                <p>Gender : {personaje.gender}</p>
                            </>
                        ) : (
                            <p>Cargando personaje...</p> 
                        )}
                    </div>
                </div>
                <div>
                    <Link to="/Personajes">
                        <button className="btn btn-light mt-5 ">Back</button>
                    </Link>
                </div>

            </div>
        </div>
    )
}