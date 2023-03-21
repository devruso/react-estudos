import './Sorteio.css';
import { useState } from 'react';

export function Sorteio(){

    const [numeroGerado, setNumeroGerado] = useState();

    function gerarNumero(){
        let numero = Math.floor(Math.random() * 100);
        setNumeroGerado(numero);
    }


    return (
        <div className='caixa'>
            <h1>Sorteador de números!</h1>
             <h2 className={numeroGerado % 2 === 0 ? "par" : "impar"}>{numeroGerado}</h2>
            <button onClick={gerarNumero}>Gerar numero</button>

        </div>
    )
}