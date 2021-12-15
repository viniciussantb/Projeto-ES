import styles from './CreateRidePage.module.css'
import React, {useState} from "react";

const CreateRidePage = ({ onSubmit }) => {
    const [localSaida, setLocalSaida] = useState('');
    const [localChegada, setLocalChegada] = useState('');
    const [data, setData] = useState('');
    const [hora, setHora] = useState('');
    const [valor, setValor] = useState('');
    const [vagas, setVagas] = useState('');

    const handleOnSubmit = (e) => {
        e.preventDefault();
        
        const data = {
            localSaida,
            localChegada,
            data,
            hora,
            valor,
            vagas,
        }

        onSubmit(data);
    }

    return (
        <div className={styles.createRidePage}>

            <div className={styles.createRideContainer}>

                <div className={styles.createRideForm}>
                        <p>Cadastro Carona</p>
                        <input type="name" placeholder='Local saída' value={localSaida} onChange={(e)=> setLocalSaida(e.target.value)}/>
                        <input type="name" placeholder='Local chegada' value={localChegada} onChange={(e)=> setLocalChegada(e.target.value)}/>
                        <input type="date" placeholder='Data de saída' value={data} onChange={(e)=> setData(e.target.value)}/>
                        <input type="name" placeholder='Hora da saída' value={hora} onChange={(e)=> setHora(e.target.value)}/>
                        <input type="name" placeholder='Valor da carona' value={valor} onChange={(e)=> setValor(e.target.value)}/>
                        <input type="name" placeholder='Vagas disponíveis' value={vagas} onChange={(e)=> setVagas(e.target.value)}/>
                    
                        <button type="submit" onClick={handleOnSubmit}><p>Cadastrar carona</p></button>
                </div>
            </div>
        </div>
    )
}

export default CreateRidePage