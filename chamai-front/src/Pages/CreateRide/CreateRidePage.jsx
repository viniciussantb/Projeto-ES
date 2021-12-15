import styles from './CreateRidePage.module.css'
import React, {useState, useContext} from "react";
import { UserContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';

const CreateRidePage = ({ onSubmit }) => {
    const { user } = useContext(UserContext);
    const navigate = useNavigate();
    const [localSaida, setLocalSaida] = useState('');
    const [localChegada, setLocalChegada] = useState('');
    const [date, setDate] = useState('');
    const [hora, setHora] = useState('');
    const [valor, setValor] = useState('');
    const [vagas, setVagas] = useState('');

    const handleOnSubmit = (e) => {
        e.preventDefault();
        
        const data = {
            userEmail : user.email,
            name : user.name,
            university : user.university,
            date : date,
            time : hora,
            meetingLocation : localSaida,
            endLocation : localChegada,
            price : valor,
            vagas : vagas
        }

        fetch('http://localhost:8080/rides', {
            method : 'POST',
            headers: { 'content-type' : 'application/json' },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            navigate('/feed', {replace : true});
        })
    }

    return (
        <div className={styles.createRidePage}>

            <div className={styles.createRideContainer}>

                <div className={styles.createRideForm}>
                        <p>Cadastro Carona</p>
                        <input type="name" placeholder='Local saída' value={localSaida} onChange={(e)=> setLocalSaida(e.target.value)}/>
                        <input type="name" placeholder='Local chegada' value={localChegada} onChange={(e)=> setLocalChegada(e.target.value)}/>
                        <input type="date" placeholder='Data de saída' value={date} onChange={(e)=> setDate(e.target.value)}/>
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