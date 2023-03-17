import "./Quadrado.css";

function quandoClicar() {
    alert("CLICOOOOOOOOOU")
}

function quandoMouseEntrar(evento) {
    // target é o elemento que acionou o evento (DOM)
    const elemActive = evento.target;
    elemActive.style.backgroundColor = "red";
}

function quandoMouseSair(evento) {
    // target é o elemento que acionou o evento (DOM)
    const elemActive = evento.target;
    elemActive.style.backgroundColor = "blue";
}
function quandoDuploClique(e){
    const elem = e.target;
    elem.style.backgroundColor = "orange";
}

export function Quadrado() {
    return (
        <div
            className="quadrado"
            onMouseEnter={quandoMouseEntrar}
            onMouseLeave={quandoMouseSair}
            onDoubleClick={quandoDuploClique}
        >
        </div>
    );
}