import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


export const Vehículo = () => {
const [vehiculo, setVehiculo] = useState(null);
    const { id } = useParams();
    console.log(id)
    

    useEffect(() => {
        console.log("ID recibido:", id);
        getVehiculo()
    }, [id]);

    async function getVehiculo() {
        try {
            const response = await fetch(`https://swapi.tech/api/vehicles/${id}`);
            console.log("Respuesta fetch:", response);
            const data = await response.json();
            console.log("Datos recibidos:", data);
            setVehiculo(data.result.properties);
        } catch (error) {
            console.error("Error al cargar vehiculos:", error);
        }
    };

    

    return (
        <div className="container">
            <div className="d-flex flex-column mt-3 ">
                <div className="d-flex ">
                    <div>
                        <img className="me-5 rounded" style={{ width: "30rem" }} src="https://th.bing.com/th/id/OIP.wu6qOGzDuPMiwCa0HLyeZAHaEo?w=236&h=180&c=7&r=0&o=5&cb=iwc2&dpr=1.3&pid=1.7" alt="Vehicle" />
                    </div>
                    <div>
                        {vehiculo ? (
                            <>
                                <h1 className="mb-3">{vehiculo.name}</h1>
                                <p>Model : {vehiculo.model}</p>
                                <p>Vehicle Class : {vehiculo.vehicle_class}</p>
                                <p>Passengers : {vehiculo.passengers}</p>
                                <p>Manufacturer : {vehiculo.manufacturer}</p>
                                <p>Crew : {vehiculo.crew}</p>
                            </>
                        ) : (
                            <p>Cargando vehiculo...</p> 
                        )}
                    </div>
                </div>
                <div>
                    <Link to="/Vehículos">
                        <button className="btn btn-light mt-5 ">Back</button>
                    </Link>
                </div>

            </div>
        </div>
    )
}