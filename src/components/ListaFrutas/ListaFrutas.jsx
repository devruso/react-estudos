import { frutas } from "../../data/frutas";
import "./ListaFrutas.css";
import { useState } from "react";

export function ListaFrutas() {
  const [fruits, setFruit] = useState([]);

  function findFruta(e) {
    const nomeFruta = e.target.value;

    if (!nomeFruta) {
      setFruit([]);
    } else {
      const frutasAchadas = frutas.filter((el) =>
        el.nome.toLowerCase().includes(nomeFruta.toLowerCase())
      );
      
      const frutasRenderizadas = frutasAchadas.map((fruta) => (
        <li className="fruta" key={fruta.id}>
          <img src={fruta.imagem} alt="" />
        </li>
      ));
      setFruit(frutasRenderizadas);
    }
  }

  return (
    <>
      <h1>Digite uma fruta!</h1>
      <input type="text" onChange={findFruta} />
      <br />
      <ul className="frutas">{fruits}</ul>
    </>
  );
}





