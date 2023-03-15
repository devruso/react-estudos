import "./ListaCompras.css";

const compras = [
  "Batata palha",
  "Batata frita pronta",
  "Batata doce",
  "Batata chips",
];

// Aqui temos um array de objetos
const produtos = [
    { cod: 1, nome: 'Batata palha', quantidade: 5, precoUnitario: 5.5 },
    { cod: 2, nome: 'Batata frita pronta', quantidade: 3, precoUnitario: 10.5 },
    { cod: 3, nome: 'Batata doce', quantidade: 10, precoUnitario: 20 },
    { cod: 4, nome: 'Batata chips', quantidade: 5, precoUnitario: 15 },
  ];

export function ListaCompras() {
    const elementosCompras = compras.map((elemento, index) => {
        // 1º parametro do map, é o elemento (valor) do array
        // 2º parametro é a posição (índice) do elemento
        // a key serve para controle interno do react (cada elemento tem que ter uma key própria)
        return <li key={index}>{elemento}</li>;
    });

    const elementosProdutos = produtos.map((elemento,) => {
        return(
        <div key={elemento.cod} className="card-compra">
            <h2>{elemento.nome}</h2>
            <p>Quantidade: {elemento.quantidade} un.</p>
            <p>Subtotal: R${(elemento.quantidade * elemento.precoUnitario).toFixed(2)}</p>
        </div>
        );
    });


  return (
    <>
      <h2>Lista de Compras</h2>
      <ul>{elementosCompras}</ul>
      <hr />
      <h2>Lista de Produtos</h2>
      {/* Aqui embaixo ele ta gerando um array de div (div filhas) */}
      <div>{elementosProdutos}</div>
    </>
  );
}
