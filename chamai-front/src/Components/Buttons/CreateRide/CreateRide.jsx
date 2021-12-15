import styles from './CreateRide.module.css';
import { useNavigate } from "react-router";

function CreateRide() {
    const navigate = useNavigate();

    return (

        <div className={styles.createRiderButton} onClick={()=> navigate('/createride', {replace: true})}>
            CRIAR CARONA
        </div>
    )
       
}

export default CreateRide