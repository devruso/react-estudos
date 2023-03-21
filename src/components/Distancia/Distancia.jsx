import { useEffect, useState } from "react"

export function Distancia(){
    const [metros, setMetros] = useState('');
    const [milimetros, setMilimetros] = useState();
    const [centimetros, setCentimetros] = useState();
    const [quilometros, setQuilometros] = useState();
    useEffect(() => {
        setMilimetros(metros * 1000);
        setCentimetros(metros * 100);
        setQuilometros(metros / 1000);
    },[metros])

    return (<>
        <input type="number" placeholder="Distancia em metros" onChange={(e) => setMetros(e.target.value)}/>
        <p>Valor em milimetros: {milimetros}</p>
        <p>Valor em centimetros: {centimetros} </p>
        <p>Valor em quilometros: {quilometros}</p>


    </>)
}