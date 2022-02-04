import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { mmoConnections } from "../../services";
import styled from "styled-components";
import { useFormik } from 'formik';
import { FormComentario } from "../FormComentario";

export const GamePage = () => {
    const { idJogo } = useParams();
    

    const [infoGame, setinfoGame] = useState([]);
    const [imagemDestaque, setimagemDestaque] = useState(0);
    const MeuH2 = styled.h2`
    
    `;

    const ImgThumb = styled.img`
        width: 20vw;
        display: block;
        margin-left: auto;
        margin-right: auto;
    `;

    const ImgDestaque = styled.img`
       
        width: 50vw;
        display: block;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 10px;
        border-radius: 5px;
    `;

    const ContainerMiniaturas = styled.div`
        display: flex;
        justify-content: center;
    `;
    const ImgMiniatura = styled.img`
        margin-left: 5px;
        padding: 1px;
        &:hover {
            border: 1px solid red;
        }
    `;

    const ContainerInfos = styled.div`
        background-color: gray;
        width: 30vw;
        height: auto;
        border-radius: 20px;
        padding: 5px
       
     
    `;
    const MeuDL = styled.dl`
       
    `;
    const MeuDT = styled.dt`
    
    float: left;
    clear: left;
    width: 150px;   
    text-align: left;
    font-weight: bold;
    color: green;
    &:after {
        content: ":";
    }
    `;
    const MeuDD = styled.dd`
        margin: 0 0 0 110px;
        padding: 0 0 0.5em 0;

       
    `;
    const Descri = styled.p`
    
    `;
    const DivDtDd = styled.div`
        display: flexbox;
        flex-direction: row;
    `;
    const ContainerImages = styled.div`
        margin: 15px;
        padding: 20px;
        border: 3px solid #5cb0ff;
        background-color: #d6feff;
        border-radius: 40px;
    `;
    const ContainerInfosGeral = styled.div`
        width: 30vw;
        margin: 10px;
        padding: 20px;
        border: 3px solid #5cb0ff;
        background-color: #d6feff;
        border-radius: 40px;
    `;
    const ContainerGeral = styled.div`
        display: flex;
    `;
    const ContainerComentarios = styled.div`

    `;
    const Comentar = styled.textarea`

    `
    

    useEffect(async () => {
        let temp =  await mmoConnections(`game?id=${idJogo}`)
        setinfoGame(temp)
        console.log(infoGame)
       
    }, []); 
    //awaits
    return (
        <div>
            

            {infoGame.screenshots != undefined?
            <>
                <MeuH2>{infoGame.title}</MeuH2>
                <ImgThumb src={infoGame.thumbnail}/>
                <ContainerGeral>
                    <ContainerInfosGeral>
                    <Descri>{infoGame.short_description}</Descri>
                    <ContainerInfos>
                    <MeuDL>
                            <MeuDT>Developer</MeuDT>
                            <MeuDD>{infoGame.developer}</MeuDD>
                        
                            <MeuDT>Publisher</MeuDT>
                            <MeuDD>{infoGame.publisher}</MeuDD>
                    
                    
                            <MeuDT>Release Date</MeuDT>
                            <MeuDD>{infoGame.release_date}</MeuDD>
                    
                            <MeuDT>Platform</MeuDT> 
                            <MeuDD>{infoGame.platform}</MeuDD>

                            <MeuDT>Placa de video</MeuDT>
                            <MeuDD>{infoGame.minimum_system_requirements.graphics}</MeuDD>

                            <MeuDT>memory</MeuDT>
                            <MeuDD>{infoGame.minimum_system_requirements.memory}</MeuDD>

                            <MeuDT>os</MeuDT>
                            <MeuDD>{infoGame.minimum_system_requirements.os}</MeuDD>

                            <MeuDT>processor</MeuDT>
                            <MeuDD>{infoGame.minimum_system_requirements.processor}</MeuDD>

                            <MeuDT>storage</MeuDT>
                            <MeuDD>{infoGame.minimum_system_requirements.storage}</MeuDD>
                    </MeuDL>
                    </ContainerInfos>
                    </ContainerInfosGeral>
                    <ContainerImages>
                        <ImgDestaque src={infoGame.screenshots[imagemDestaque].image}/>
                        <ContainerMiniaturas>
                            <ImgMiniatura src={infoGame.screenshots[0].image} onMouseOver={() => setimagemDestaque(0)}/>
                            <ImgMiniatura src={infoGame.screenshots[1].image} onMouseOver={() => setimagemDestaque(1)}/>
                            <ImgMiniatura src={infoGame.screenshots[2].image} onMouseOver={() => setimagemDestaque(2)}/>
                            <ImgMiniatura src={infoGame.screenshots[3].image} onMouseOver={() => setimagemDestaque(3)}/>
                        </ContainerMiniaturas>
                    </ContainerImages>
                </ContainerGeral>
                <ContainerComentarios>
                    <h3>Comentários</h3>
                  
                    <FormComentario></FormComentario>
                </ContainerComentarios>
                
               
            </>:<></>}
            
        </div>
    )
}