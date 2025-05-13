import React, { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import Card from "../components/Card";


export const Planetas = () => {

    const { store, dispatch } = useGlobalReducer();
    const [planetas, setPlanetas] = useState([]);


    useEffect(()=>{
        getPlanetas();
    },[])

    async function getPlanetas() {
        try {
            const response = await fetch('https://www.swapi.tech/api/planets/');
            if (!response.ok) {
                throw new Error(`Error HTTP: ${response.status}`);
            }
            const data = await response.json();
            setPlanetas(data.results);
        } catch (error) {
            console.error("Error al obtener planetas:", error);
        }
    }


    return (
        <div className="container">
            <h1 className="mt-3">Planets</h1>
            <div className="d-flex flex-wrap justify-content-between mt-3">
                {planetas.map((planeta,index)=>(
                    <Card key={index} name={planeta.name} dispatch={dispatch} link={`/planeta/${planeta.uid}`}/>
                ))}
            </div>

        </div>
    )
}