import React, {
    useState,
    useContext,
} from "react";
import { UserContext } from "../../context/UserContext";

import styles from './Configuracoes.module.css'

const Configuracoes = ({ onSubmit }) => {
    const {email, setEmail} = useContext(UserContext)

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [university, setUniversity] = useState('');
    const [course, setCourse] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [photo, setPhoto] = useState();
    const [car, setCar] = useState('');
    const [color, setColor] = useState('');
    const [licensePlate, setLicensePlate] = useState('');

    const handleOnSubmit = (e) => {
        e.preventDefault();
        
    }

    return (
        <div className={styles.mainContainerSettings}>
            
            <div className={styles.containerForm}>

                <h2>Atualizar dados</h2>
                
                <div className={styles.containerFormLeft}>
                        <input type="name" placeholder='Nome' value={name} onChange={(e)=> setName(e.target.value)}/>
                        <input type="name" placeholder='Sobrenome' value={lastName} onChange={(e)=> setLastName(e.target.value)}/>
                        <input type="email" placeholder='E-mail' value={newEmail} onChange={(e)=> setNewEmail(e.target.value)}/>
                        <input type="password" placeholder='Senha' value={password} onChange={(e)=> setPassword(e.target.value)}/>
                        <input type="text" placeholder='Faculdade' value={university} onChange={(e)=> setUniversity(e.target.value)}/>
                        <input type="text" placeholder='Curso' value={course} onChange={(e)=> setCourse(e.target.value)}/>
                        <input type="text" placeholder='Número de Telefone' value={phoneNumber} onChange={(e)=> setPhoneNumber(e.target.value)}/>
                </div>
                


                
                <div className={styles.containerFormRight}>
                        <input type="text" value={car} placeholder='Carro' onChange={(e)=> setCar(e.target.value)} />
                        <input type="text" value={color} placeholder='Cor do carro' onChange={(e)=> setColor(e.target.value)}/>
                        <input type="text" value={licensePlate} placeholder='Placa do carro' onChange={(e)=> setLicensePlate(e.target.value)}/>
                        <p className={styles.tituloFotoPerfil}>Escolha uma foto de perfil:</p>
                        <input className={styles.fotoPerfil} type="file" value={photo} onChange={(e)=> setPhoto(e.target.value)}/>
            
                        

                        <button type="submit" onClick={handleOnSubmit}><p>Atualizar dados</p></button>
                </div>

                <p></p>

            </div>
            
        </div>
    )
}

export default Configuracoes;