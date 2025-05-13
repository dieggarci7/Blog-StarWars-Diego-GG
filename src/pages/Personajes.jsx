import React, { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import Card from "../components/Card";

export const Personajes = () => {

    const { store, dispatch } = useGlobalReducer();
    const [personajes, setPersonajes] = useState([]);


    useEffect(()=>{
        getPersonajes();
    },[])

    async function getPersonajes() {
        try {
            const response = await fetch('https://www.swapi.tech/api/people/');
            if (!response.ok) {
                throw new Error(`Error HTTP: ${response.status}`);
            }
            const data = await response.json();
            setPersonajes(data.results);
        } catch (error) {
            console.error("Error al obtener personajes:", error);
        }
    }


    return (
        <div className="container">
            <h1 className="mt-3">Characters</h1>
            <div className="d-flex flex-wrap justify-content-between mt-3">
                {personajes.map((personaje,index)=>(
                    <Card key={index} name={personaje.name} dispatch={dispatch} link={`/personaje/${personaje.uid}`}/>
                ))}
            </div>

        </div>
    )
}
