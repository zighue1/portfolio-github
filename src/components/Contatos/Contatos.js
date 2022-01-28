import { useNavigate } from 'react-router-dom';

export const Contatos = () => {

    const navigate = useNavigate();

    return (
        <>
            <p>Contato: Bla bla bla bla bla</p>
            <p onClick={()=>navigate('/')}>Voltar</p>
        </>
    );
}