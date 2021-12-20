import PropTypes from 'prop-types';

export const Repository = ({titulo, descricao, destacar}) => {
    return (
        <>
            <h3>{titulo}</h3>
            <span>projeto em destaque!</span>
            <p>{descricao}</p>
        </> 
    )
}

Repository.propTypes = {
    titulo : PropTypes.string.isRequired,
    descricao : PropTypes.string,
    destacar : PropTypes.bool
}