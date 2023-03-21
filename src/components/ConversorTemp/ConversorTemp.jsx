import "./ConversorTemp.css";
import { useEffect, useState } from "react";


export function ConversorTemp(){

    const [tempC, setTempC] = useState(0);
    const [tempF, setTempF] = useState(0);
    const [tempK, setTempK] = useState(0);

    useEffect(() =>{
        const resultado = tempC * 1.8 + 32;
        setTempF(resultado);
        setTempK(Number(tempC) + 273)
    }, [tempC])
    return <div><input type="number" placeholder="Digite a temperatura em C" onChange={(evento)=>setTempC(evento.target.value)} />
    <p>Valor digitado: {tempC} ºC</p>
    <p>Temperatura em Fahrenheit: {tempF} º F </p>
    <p>Temperatura em Kelvin: {tempK} K</p>
    </div>;
    
}