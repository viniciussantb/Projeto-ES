import React, {
    useState
} from "react";

import styles from './Configuracoes.module.css'

const Configuracoes = ({ onSubmit }) => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [university, setUniversity] = useState('');
    const [course, setCourse] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleOnSubmit = (e) => {
        e.preventDefault();
        
        const data = {
            name,
            lastName,
            email,
            university,
            course,
            password,
            phoneNumber
        }

        onSubmit(data);
    }

    return (
        <div className={styles.mainContainerSettings}>
            
            <div className={styles.containerForm}>

                <h2>Atualizar dados</h2>
                
                <div className={styles.containerFormLeft}>
                        <input type="name" placeholder='Nome' value={name} onChange={(e)=> setName(e.target.value)}/>
                        <input type="name" placeholder='Sobrenome' value={lastName} onChange={(e)=> setLastName(e.target.value)}/>
                        <input type="email" placeholder='E-mail' value={email} onChange={(e)=> setEmail(e.target.value)}/>
                        <input type="password" placeholder='Senha' value={password} onChange={(e)=> setPassword(e.target.value)}/>
                        <input type="text" placeholder='Faculdade' value={university} onChange={(e)=> setUniversity(e.target.value)}/>
                        <input type="text" placeholder='Curso' value={course} onChange={(e)=> setCourse(e.target.value)}/>
                        <input type="text" placeholder='Número de Telefone' value={phoneNumber} onChange={(e)=> setPhoneNumber(e.target.value)}/>
                </div>
                


                
                <div className={styles.containerFormRight}>
                        <input type="name" placeholder='Carro' />
                        <input type="name" placeholder='Cor do carro'  />
                        <input type="email" placeholder='Placa do carro'  />
                        <p className={styles.tituloFotoPerfil}>Escolha uma foto de perfil:</p>
                        <input className={styles.fotoPerfil} type="file"/>
            
                        

                        <button type="submit" onClick={handleOnSubmit}><p>Atualizar dados</p></button>
                </div>

                <p></p>

            </div>
            
        </div>
    )
}

export default Configuracoes;