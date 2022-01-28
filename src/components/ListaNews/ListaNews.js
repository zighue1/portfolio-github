import { useEffect, useState } from "react";
import { mmoConnections} from "../../services"
import {CardNews} from "../CardNews"
export const ListaNews = () => {

    const [listaNews, setlistaNews] = useState([]);
    const [listaGamesFiltrada, setlistaGamesFiltrada] = useState([]);
    async function fetchMMOConnections (){
        let result = await mmoConnections("latestnews")
        setlistaNews(result)
        setlistaGamesFiltrada(result)
    }
     useEffect(() => {
        fetchMMOConnections()
    }, []);
    
    const filtraNews = () => {}

    return (
        <>
            <h1>Lista de Noticias</h1>
            <input placeholder={'Digite Aqui'} onChange={e=>filtraNews(e)}></input>
            {listaGamesFiltrada.map((e,i)=>
              
              (
                <>
                    <CardNews key={i} news={e}/>
                    <hr></hr>
                </>
        )
               
            
            )}
        </>
    );
}