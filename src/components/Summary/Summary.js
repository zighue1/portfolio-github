import PropTypes from 'prop-types';

export const Summary = ({imagem, nome}) => {
    return (
        <>
            <h2>Eu sou o {nome}</h2>
            <img alt={nome} src={imagem}></img>
        </> 
    )
}
Summary.propTypes = {
    nome : PropTypes.string.isRequired,
    imagem : PropTypes.string.isRequired
}