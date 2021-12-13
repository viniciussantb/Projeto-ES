import styles from './Cabecalho.module.css'
import logo from './logo.png'

function Cabecalho() {
    return (
        <div className={styles.cabecalhoContainer}>
           <div>
                <img src={logo} width="50px"/>
           </div>
        </div>
    )
}

export default Cabecalho