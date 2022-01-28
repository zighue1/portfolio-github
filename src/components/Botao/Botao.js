import { useAutenticacao } from "../../context"

//EXERCICIO 7  
//              <button onClick={()=>nome?setNome(null):setNome('Ricardo')}>
  //            {nome?"Logout":"Login"}</button>
export const Botao = ()=>{
    const {tema, setTema} = useAutenticacao();
    //
    return (
       <button onClick={() => {setTema(!tema)}} style={{color : tema?"black":"red"}}>Mudar Tema</button>
    )
}