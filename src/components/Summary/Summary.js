import PropTypes from 'prop-types';
import Styles from './Summary.module.css'

export const Summary = ({imagem, nome}) => {
    return (
        <div className={Styles.DivSummary}>
            <h2>Eu sou o {nome}</h2>
            <img alt={nome} src={imagem}></img>
        </div> 
    )
}
Summary.propTypes = {
    nome : PropTypes.string.isRequired,
    imagem : PropTypes.string.isRequired
}