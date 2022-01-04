import PropTypes from 'prop-types';
import Styles from './Repository.module.css'

export const Repository = ({titulo, descricao, destacar}) => {
    return (
        <div className={Styles.Repository} styles={{color:'red'}}>
            <h3>{titulo}</h3>
            <p>{descricao}</p>
        </div> 
    )
}

Repository.propTypes = {
    titulo : PropTypes.string.isRequired,
    descricao : PropTypes.string,
    destacar : PropTypes.bool
}