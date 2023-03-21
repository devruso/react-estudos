import { useEffect, useState } from "react";


export function CalculadoraIMC(){
    const [peso, setPeso ] = useState(0);
    const [altura, setAltura] = useState(0);
    const [imc, setImc] = useState(-1);

    useEffect(()=>{
        setImc(peso/ (altura * altura));
    }, [peso,altura])

    function limpar(){
        setAltura('');
        setPeso('');
        setImc(-1);
    }

    return (<div >
        <h1>Calculadora de IMC</h1>
        <br />
        <h3>Informe seus dados para saber seu IMC</h3>
        <label htmlFor="height"> altura</label>
        <input type="number" placeholder="Digite sua altura" id="height" onChange={(e) => setAltura(e.target.value)} value={altura} />
        <label htmlFor="">peso</label>
        <input type="number" placeholder="Digitue seu peso" id="weight" onChange={(e) => setPeso(e.target.value)} value={peso} />
        <br />
        <button onClick={limpar}>Limpar</button>
        {imc > -1 && <p>O seu IMC é: {imc.toFixed(2)}</p>}
    </div>)
}