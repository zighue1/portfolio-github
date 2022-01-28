import { useAutenticacao } from "../../context";



export const NomeAutenticado = () =>{
    const autenticado= useAutenticacao();
    return (
        <p>{autenticado.nome?autenticado.nome:""}</p>
    );
}