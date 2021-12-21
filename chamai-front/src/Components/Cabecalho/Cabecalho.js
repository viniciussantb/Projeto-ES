import styles from './Cabecalho.module.css'
import logo from './logo.png'
import { useNavigate } from "react-router";


function Cabecalho() {
    const navigate = useNavigate();
    return (
        <div className={styles.cabecalhoContainer}>
           <div >
                <img src={logo} width="47px" onClick={()=> navigate('/', {replace: true})} />
           </div>
        </div>
    )
}

export default Cabecalho