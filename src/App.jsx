import { ListaAluno } from "./components/ListaAluno/ListaAluno";
import { ListaCompras } from "./components/ListaCompras/ListaCompras";
import { ListaFuncionarios } from "./components/ListaFuncionarios/ListaFuncionarios";
import { NavBar } from "./components/NavBar/NavBar";

export function App() {
  return (
    <>
      {/* <ListaCompras/> */}
      {/* <ListaFuncionarios/> */}
      <NavBar logado={true} nomeUsuario="José" />
      <NavBar logado={false} nomeUsuario="José" />
      <ListaAluno></ListaAluno>
    </>
  );
}