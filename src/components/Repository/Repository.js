import PropTypes from 'prop-types';
import Styles from './Repository.module.css'


export const Repository = ({titulo, descricao, destacar}) => {
    return (
        <div className={Styles.Repository} style={{ border:  destacar ? '3px solid rgb(255, 166, 0)' : '3px solid rgb(220, 220, 220)' }}>
            <div className={Styles.tituloContainer}>
                <h3 >{titulo}</h3>
                {destacar&&<span style={destacar?{color: 'red'}:{}}>Texto em Destaque</span>}
            </div>
            <p>{descricao}</p>
        </div> 
    )
}

/*
//{ border:  destacar ? 'solid 1px rgb(255, 166, 0);' : 'solid 1px rgb(220, 220, 220);' }
export const Repository = ({titulo, descricao, destacar}) => {
    return (
        <div className={Styles.Repository} style={{ border:  destacar ? '1px solidrgb(255, 166, 0);' : '1px solid rgb(220, 220, 220);' }} >
            <div className={Styles.tituloContainer}>
                <h3 style={{color: 'red'}}>{titulo}</h3>
                {destacar&&<span>Texto em Destaque</span>}
            </div>
            <p>{descricao}</p>
        </div> 
    )
}
*/
Repository.propTypes = {
    titulo : PropTypes.string.isRequired,
    descricao : PropTypes.string,
    destacar : PropTypes.bool
}