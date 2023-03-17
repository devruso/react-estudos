import { useState } from "react";
import "./Cadastro.css";

export function Cadastro() {
    
    const [nome, setNome] = useState(""); // função que cria um estado, retorna em formato de array
    const [email, setEmail] = useState("");
    const [resumo, setResumo] = useState("")
    // Esta função é chamada a cada fezer que for digitado no campo nome
    function obterNome(evento) {
        const input = evento.target;
        const valor = input.value;
        setNome(valor);
        // setNome(evento.target.value);
    }

    function obterEmail(evento) {
        const input = evento.target;
        const valor = input.value;
        setEmail(valor);
        // setEmail(evento.target.value);
    }

    function obterResumo(e){
        setResumo(e.target.value);
    }
    return (
        <div>
            <strong>Formulário de cadastro</strong>
            <br />
            <input type="text" placeholder="Digite seu nome" onChange={obterNome} />
            <br />
            <input type="text" placeholder="Digite seu e-mail" onChange={obterEmail} />
            <br />
            <textarea name="" id="" cols="30" rows="10" onChange={obterResumo}/>
            <br />
            <strong>{nome}</strong>
            <br />
            <strong>{email}</strong>
            <br />
            <strong>{resumo}</strong>
        </div>
    )
}