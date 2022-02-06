import { Repository } from "./components/Repository";
import { Summary } from "./components/Summary/Summary";
import { useState, useEffect, useReducer} from "react"
import {mapToRepoObject} from "./data/data-utils"
import { NomeAutenticado } from "./components/NomeAutenticado/NomeAutenticado";
import { Botao } from "./components/Botao/Botao";
import { AutenticacaoContext, AutenticacaoProvider, useAutenticacao } from "./context";
import { Home } from "./components/Home/Home";
import { Router } from "./routes/Router";
import { BrowserRouter } from 'react-router-dom';
import { myTheme } from './themes/themes';
import { ThemeProvider } from 'styled-components';
import { Cabecalho } from "./components/Cabecalho";
import { GameContext, GameContextProvider } from "./context/GameContext";


function App() {
  
  
  return (
    <div className="App">
    
      <ThemeProvider theme={myTheme}>
        <GameContextProvider>
          <BrowserRouter>
              <Cabecalho></Cabecalho>
              <Router />
          </BrowserRouter>
        </GameContextProvider>
       
      </ThemeProvider>
    
   </div>
    
  );

/*  // EXERCICIO 3
  const inicialValue = []
  const reducer = (state, action) => {
    switch (action.type) {
      case "add":
        return [...state,new Date()] 
      case "rmv":
        return state.slice(0,-1)
      default:
        return state;
    }
  }
*/

/*    // EXERCICIO 4
const inicialValue = [0]
  const reducer = (state, action) => {
    console.log(state.result)
    switch (action.type) {
      case "Somar":
        return [(parseInt(state)+parseInt(numero))] 
      case "Subtrair":
        return [(parseInt(state)-parseInt(numero))] 
      case "Dividir":
        return [(parseInt(state)/parseInt(numero))] 
      case "Multiplicar":
        return [(parseInt(state)*parseInt(numero))] 
      default:
        return state;
    }
  }

    const [operacao, setoperacao] = useState('Somar');
  const [numero, setnumero] = useState(0);
  const [state, dispatch] = useReducer(reducer, inicialValue)

  //JSX EXERCICIO 3 e 4
  <h1>Lista de datas</h1>
      <button onClick={()=> dispatch({type: 'add'})}>Adicionar</button>
      <button onClick={()=> dispatch({type: 'rmv'})}>Remover</button>
     <ul>
      {//state.map((e, index )=> (<li key={index}>{e.toLocaleString('pt-BR')}</li>))
      }
     </ul>
     
     <input type={'number'} onChange={e=>{setnumero(e.target.value)}}></input>
     
     <select onChange={e=>{setoperacao(e.target.value)}}>
       <option value={'Somar'}>Somar</option>
       <option value={'Subtrair'}>Subtrair</option>
       <option value={'Dividir'}>Dividir</option>
       <option value={'Multiplicar'}>Multiplicar</option>
     </select>
     <button onClick={()=> dispatch({type: operacao})}>Confirmar</button>
     <p>Resultado: {state}</p>
  */



 
  
}

export default App; 
