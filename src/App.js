import { Repository } from "./components/Repository";
import { Summary } from "./components/Summary/Summary";

function App() {
  return (
    <div className="App">
      <h1>Olá, portfolio!</h1>
      <Summary imagem="https://github.com/zighue1.png" nome="Federico Zighue Muino Robillard"></Summary>
      <Repository titulo={"Conheça meu Projeto"} descricao={"meu code nao ta escrevendo o lorem dentro do jsx"} destacar={false}></Repository>
    </div>
  );
}

export default App; 
