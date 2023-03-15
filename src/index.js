// Trazer de outro arquivo/biblioteca alguma função ou variável
import { createRoot } from "react-dom/client";
import { Footer } from "./components/Footer/Footer";
import { Mensagem } from "./components/Mensagem/Mensagem";
import { Titulo } from "./components/Titulo/Titulo";
import { Blog } from "./components/Blog/Blog";
import "./styles.css";
import { Postagem } from "./components/Postagem/Postagem";
import { ListMusic } from "./components/ListMusic/ListMusic";
import { Task } from "./components/Task/Task";
import { ProductList } from "./components/ProductList/ProductList";
// Selecionando a div na página
const rootElement = document.getElementById("root");

// A div root será a base da aplicação
const root = createRoot(rootElement);

// Inserimos o conteúdo da página
root.render(
  <div>
    {/*
      <Titulo></Titulo>
    <Mensagem></Mensagem>
    <Blog></Blog>
    <Postagem></Postagem>
    <Footer></Footer>
      */}
    <Titulo corBorda="#00FF00" corFundo="#00FF0022">Tarefas</Titulo>
    <ListMusic></ListMusic>
    <Titulo corBorda="#00FF00" corFundo="#00FF0022">Tarefas</Titulo>
    <Task title="Beber água" status="Feito" deadline="14/03/23 14:00" />
    <Task
      title="Fazer apresentação"
      status="Atrasado"
      deadline="14/03/23 23:00"
    />
    <Task title="Correr" status="Feito" deadline="12/03/23 13:00" />

    <Titulo>
      React é uma biblioteca para criação de interfaces visuais web.
    </Titulo>
      <Titulo corBorda="972929" corFundo="#edf05a">
        Lista de Produtos
      </Titulo>
    <ProductList></ProductList>
  </div>
);

// let nome = "Almir";

// root.render(
//   <section>
//     <h1>React é top</h1>
//     <img src="https://picsum.photos/200" />
//     <p>
//       Olá, tudo bem? <br /> <b>{nome.toUpperCase()}</b>
//     </p>
//     <p>Soma: {1 + 1}</p>
//   </section>
// );

// JSX = Javascript Extension
// No fim o HTML é convertido para Javascript (por baixo dos panos)
// JSX = Açúcar Sintático

// Dentro das chaves podemos escrever expressões JS!
