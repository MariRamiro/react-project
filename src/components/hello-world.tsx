import React from "react";
import Title from "./title";
import ModuleDetails from "./module-details";
import { calculateAge } from "../utils/age";

function HelloWorld() {
    const name = 'Mari'
    const birth = '27/03/1987'
    const age = calculateAge(birth);

    return (
        <div>
            <h1 style={{color: 'green', textAlign: 'center'}}>{name}</h1>
            <p>{`Age ${age}`}</p>
            <Title />
            <ModuleDetails />
        </div>
    );
}

export default HelloWorld;