import PropTypes from 'prop-types';
import Styles from './Repository.module.css'

/*
export const Repository = ({titulo, descricao, destacar}) => {
    return (
        <div className={`${Styles.Repository} ${destacar?Styles.Destacado:Styles.Normal}`} >
            <div className={Styles.tituloContainer}>
                <h3 styles={{color: 'red'}}>{titulo}</h3>
                {destacar&&<span>Texto em Destaque</span>}
            </div>
            <p>{descricao}</p>
        </div> 
    )
}
*/

//{ border:  destacar ? 'solid 1px rgb(255, 166, 0);' : 'solid 1px rgb(220, 220, 220);' }
export const Repository = ({titulo, descricao, destacar}) => {
    return (
        <div className={Styles.Repository} style={{ border:  'solid 1px rgb(255, 166, 0);'}} >
            <div className={Styles.tituloContainer}>
                <h3 style={{color: 'red'}}>{titulo}</h3>
                {destacar&&<span>Texto em Destaque</span>}
            </div>
            <p>{descricao}</p>
        </div> 
    )
}
Repository.propTypes = {
    titulo : PropTypes.string.isRequired,
    descricao : PropTypes.string,
    destacar : PropTypes.bool
}