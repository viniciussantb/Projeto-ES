import perfilPadrao from './perfilPadrao.png'
import styles from './FotoPerfil.module.css'

function FotoPerfil() {
    return (
        <img className={styles.fotoPerfil} src={perfilPadrao}/>
    )
}

export default FotoPerfil
