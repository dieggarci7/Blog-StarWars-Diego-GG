import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


export const Planeta = () => {
const [planeta, setPlaneta] = useState(null);
    const { id } = useParams();
    console.log(id)
    

    useEffect(() => {
        console.log("ID recibido:", id);
        getPlaneta()
    }, [id]);

    async function getPlaneta() {
        try {
            const response = await fetch(`https://swapi.tech/api/planets/${id}`);
            console.log("Respuesta fetch:", response);
            const data = await response.json();
            console.log("Datos recibidos:", data);
            setPlaneta(data.result.properties);
        } catch (error) {
            console.error("Error al cargar planetas:", error);
        }
    };

    

    return (
        <div className="container">
            <div className="d-flex flex-column mt-3 ">
                <div className="d-flex ">
                    <div>
                        <img className="me-5 rounded" style={{ width: "30rem" }} src="https://th.bing.com/th/id/OIP.7lZ8fTSoHXqTELGARynW6gHaEK?w=297&h=180&c=7&r=0&o=5&cb=iwc2&dpr=1.3&pid=1.7" alt="Planet" />
                    </div>
                    <div>
                        {planeta ? (
                            <>
                                <h1 className="mb-3">{planeta.name}</h1>
                                <p>Climate : {planeta.climate}</p>
                                <p>Gravity : {planeta.gravity}</p>
                                <p>Population : {planeta.population}</p>
                                <p>Terrain : {planeta.terrain}</p>
                            </>
                        ) : (
                            <p>Cargando planeta...</p> 
                        )}
                    </div>
                </div>
                <div>
                    <Link to="/Planetas">
                        <button className="btn btn-light mt-5 ">Back</button>
                    </Link>
                </div>

            </div>
        </div>
    )
}