import { Formik, Field, Form, ErrorMessage} from "formik"
import { useEffect, useReducer, useState } from "react";

import * as Yup from 'yup'
import {DivSuperior, MeuTextarea, VotoDown, VotoUp, ComentarioP, Nome, ContainerComentarios, DivComentario, DivInferior, DivNome, DivEmail, PontuacaoP} from "./FormComentario.style"
function reducer(state, action) {
    switch (action.type) {
      case 'increment':
          
        state[action.index].ponto+=0.5
        console.log('entrei 2x?', state)
        return [...state];
      case 'decrement':
        state[action.index].ponto-=0.5
        return [...state];
      default:
        throw new Error();
    }
}

export const FormComentario = () => {
    const init = () =>{
        if(JSON.parse(localStorage.getItem("comentarios")))
            return JSON.parse(localStorage.getItem("comentarios"))
        return [];
    }
    const[comentarios, setComentarios] = useState([])
    const [state, dispatch] = useReducer(reducer, [], init);
    
    
    


    useEffect(() => {
        if(JSON.parse(localStorage.getItem("comentarios"))){
            let coments = JSON.parse(localStorage.getItem("comentarios"))
            setComentarios(coments)
           
        }
            
       
    }, []); 

    const handleSubmit = (values) => {
        values.ponto = 10;
        if(comentarios)
            setComentarios([values])
       setComentarios([...comentarios,values])
        localStorage.setItem("comentarios",JSON.stringify([...comentarios,values]));
        console.log('HandleSubmit',comentarios)
    };
    
    const schema = Yup.object().shape({
        email: Yup.string().required('Campo obrigatório').email('email inválido'),
        nome: Yup.string().required('Campo Obrigatório'),
        comentario: Yup.string().required('Campo Obrigatório')
    })

    
    
    const handleVoto = (p)=>{
        
        
        console.log('HandleVoto',state)  
    }
    
        return (
            <>
                <h1>Comentários</h1>

                <Formik initialValues={{email: "", nome: "", comentario: ""}} onSubmit={handleSubmit} validateOnMount validationSchema={schema}>
                {({ values}) => (
                    <Form>
                        
                        <DivSuperior>
                            <DivEmail>
                                <label htmlFor="email">E-mail: </label>
                                <Field name="email" paceholder="E-mail" type="email" />
                                <ErrorMessage name="email" component='span' style={{color: "red"}}/>
                            </DivEmail>
                            <DivNome>
                                <label htmlFor="nome">Nome: </label>
                                <Field name="nome" type="input" />
                                <ErrorMessage name="nome" component='span'/>
                            </DivNome>
                        </DivSuperior>
                        <DivInferior>
                            <label htmlFor="comentario">Comentario: </label>
                            <Field name="comentario" as={MeuTextarea} type="textarea" rows="8" cols="50"/>
                        </DivInferior>
                        
                        <button type="submit" >Enviar</button>
                       
                    </Form>
                )}
                </Formik>
                
                {state.map((e,i)=>
                    <DivComentario>
                        <ContainerComentarios>

                            <Nome>{e.nome}:</Nome>
                            <ComentarioP>{e.comentario}</ComentarioP>
                        </ContainerComentarios>
                        
                        <VotoUp onClick={()=>dispatch({type: "increment",index: i, p: e})}></VotoUp>
                        <PontuacaoP className="red">{e.ponto}</PontuacaoP>
                       
                        <VotoDown onClick={()=>dispatch({type: "decrement",index: i, p: e})}></VotoDown>
                    </DivComentario>
                )}
                
            </>
        );
};