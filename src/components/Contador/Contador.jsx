import { useState } from "react"; // useState -> Uma função

export function Contador() {
    // useState é uma função que cria um estado
    // Um estado é uma variavel especial que sincroniza as mudanças na página
    // indice 0 -> estado
    // indece 1 -> função que muda o estado
    // Retorna um array (tem apenas duas posições)

    // const array = useState(10); 
    // let numero = array[0];
    // let setNumero = array[1];

    // destruct (desestruturação)
    const [numero, setNumero] = useState(0);

    // Incrementar
    function inc() {
        const novoNumero = numero + 1;
        setNumero(novoNumero);
    }
    function inc10(){
        setNumero(numero + 10);
    }
    function inc100(){
        setNumero(numero + 100)
    }

    // Operacoes
    function vezes3(){
        setNumero(numero * 3);
    }
    function divisao2(){
        setNumero(numero / 2);
    }

    // Decrementar
    function dec() {
        const novoNumero = numero - 1;
        setNumero(novoNumero);
    }
    function dec50(){
        setNumero(numero - 50);
    }
    function dec5(){
        setNumero(numero - 5);
    }

    return (
        <div>
            <h1>{numero}</h1>
            <button onClick={inc}>+1</button>
            <button onClick={inc10}>+10</button>
            <button onClick={inc100}>+100</button>
            <button onClick={vezes3}>*3</button>
            <button onClick={divisao2}>/2</button>
            <button onClick={dec}>-1</button>
            <button onClick={dec50}>-50</button>
            <button onClick={dec5}>-5</button>


        </div>
    );
}