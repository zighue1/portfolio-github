import { Repository } from "./components/Repository";
import { Summary } from "./components/Summary/Summary";
import { useState, useEffect} from "react"
import {mapToRepoObject} from "./data/data-utils"

function App() {
  /*
  const [repositorios, setrepositorios] = useState([
    {id: 1, titulo: "um texto qualquer", descricao: "uma string qualquer", destacar:false},
    {id: 2, titulo: "um texto qualquer", descricao: "uma string qualquer", destacar:false},
    {id: 3, titulo: "PROJETO EM DESTAQUE", descricao: "meu code nao ta escrevendo o lorem dentro do jsx meu code nao ta escrevendo o lorem dentro do jsx meu code nao ta escrevendo o lorem dentro do jsx meu code nao ta escrevendo o lorem dentro do jsx meu code nao ta escrevendo o lorem dentro do jsx meu code nao ta escrevendo o lorem dentro do jsx meu code nao ta escrevendo o lorem dentro do jsx meu code nao ta escrevendo o lorem dentro do jsx meu code nao ta escrevendo o lorem dentro do jsx", destacar:true},
    {id: 4, titulo: "um texto qualquer", descricao: "uma string qualquer", destacar:false},
    {id: 5, titulo: "um texto qualquer", descricao: "uma string qualquer", destacar:false}
  ]);
 */
  const [repositorios, setrepositorios] = useState([])
  const [nomeUsuario, setnomeUsuario] = useState('zighue1');

  const handleNomeUsuario = (text) => {
    setnomeUsuario(text)
  }
  const handleBuscar = () => {
  //  fetchDadosDoUsuario()
  }

  const fetchDadosDoUsuario = () =>{
    fetch(`https://api.github.com/users/${nomeUsuario}/repos`).then(r => {
      r.json().then(r => {
        console.log(r)
        const resultadoMapeado = mapToRepoObject(r);
        setrepositorios(resultadoMapeado)
      })
    })
  }
  useEffect(() => {
   fetchDadosDoUsuario()
   
  }, []);
  
  return (
    <div className="App">
      <Summary imagem="https://github.com/zighue1.png" nome="Federico Zighue Muino Robillard"></Summary>
      <input onChange={e=>{handleNomeUsuario(e.target.value)}} value={nomeUsuario}></input> <button onClick={handleBuscar()}>Buscar</button>
      <h1>Meu Portfólio Github</h1>
      {repositorios.length === 0?("Nenhum Repositório Disponível"):
       
              repositorios.map(elemento => 
                (<Repository key={elemento.id} titulo={elemento.titulo} descricao={elemento.descricao} destacar={elemento.destacar}></Repository>)
             
          )}
      
    </div>
  );
}

export default App; 
