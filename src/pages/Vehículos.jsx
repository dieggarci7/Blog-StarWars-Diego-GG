import React, { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import Card from "../components/Card";


export const Vehículos = () => {
 const { store, dispatch } = useGlobalReducer();
    const [vehiculos, setVehiculos] = useState([]);


    useEffect(()=>{
        getVehiculos();
    },[])

    async function getVehiculos() {
        try {
            const response = await fetch('https://www.swapi.tech/api/vehicles/');
            if (!response.ok) {
                throw new Error(`Error HTTP: ${response.status}`);
            }
            const data = await response.json();
            setVehiculos(data.results);
        } catch (error) {
            console.error("Error al obtener vehiculos:", error);
        }
    }


    return (
        <div className="container">
            <h1 className="mt-3">Vehicles</h1>
            <div className="d-flex flex-wrap justify-content-between mt-3">
                {vehiculos.map((vehiculo,index)=>(
                    <Card key={index} name={vehiculo.name} dispatch={dispatch} link={`/vehículo/${vehiculo.uid}`}/>
                ))}
            </div>

        </div>
    )
}