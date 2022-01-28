import { useNavigate } from 'react-router-dom';


export const Home = () => {
    const navigate = useNavigate();
    return (
        <>
            <h1>Bem Vindo</h1>
            <footer onClick={() => navigate('/contatos')}>Contatos</footer>
        </>
    );
}