import { Repository } from "./components/Repository";
import { Summary } from "./components/Summary/Summary";


function App() {

  const lista_Repositorios =[
    {id: 1, titulo: "um texto qualquer", descricao: "uma string qualquer"},
    {id: 2, titulo: "um texto qualquer", descricao: "uma string qualquer"},
    {id: 3, titulo: "um texto qualquer", descricao: "uma string qualquer"},
    {id: 4, titulo: "um texto qualquer", descricao: "uma string qualquer"},
    {id: 5, titulo: "um texto qualquer", descricao: "uma string qualquer"}
  ]
  //({id, titulo, descricao}  
  //()
  
  return (
    <div className="App">
      <Summary imagem="https://github.com/zighue1.png" nome="Federico Zighue Muino Robillard"></Summary>
      <Repository titulo={"Conheça meu Projeto"} descricao={"meu code nao ta escrevendo o lorem dentro do jsx meu code nao ta escrevendo o lorem dentro do jsx meu code nao ta escrevendo o lorem dentro do jsx meu code nao ta escrevendo o lorem dentro do jsx meu code nao ta escrevendo o lorem dentro do jsx meu code nao ta escrevendo o lorem dentro do jsx meu code nao ta escrevendo o lorem dentro do jsx meu code nao ta escrevendo o lorem dentro do jsx meu code nao ta escrevendo o lorem dentro do jsx"} destacar={true}></Repository>
      <h1>Meu Portfólio Github</h1>
      {lista_Repositorios.length === 0?("Nenhum Repositório Disponível"):
          lista_Repositorios.map(elemento => 
          
            (<p key={elemento.id} >{elemento.id} - {elemento.titulo} - {elemento.descricao}</p>)
          )}
      
    </div>
  );
}

export default App; 
