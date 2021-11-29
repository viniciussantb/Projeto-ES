import React, {
    useState
} from "react";
import SigninImg from '../../assets/logo-signin.png'

import './signup.css'
const Signup = ({ onSubmit }) => {
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
        <div className="main-container">
            <div className='photo-description'>
                <img src={SigninImg} alt="" />
            </div>

            
            <div className="div-buttons">
                    <p className='signin-header'>Cadastro</p>
                    <input type="name" placeholder='Nome' value={name} onChange={(e)=> setName(e.target.value)}/>
                    <input type="name" placeholder='Sobrenome' value={lastName} onChange={(e)=> setLastName(e.target.value)}/>
                    <input type="email" placeholder='E-mail' value={email} onChange={(e)=> setEmail(e.target.value)}/>
                    <input type="password" placeholder='Senha' value={password} onChange={(e)=> setPassword(e.target.value)}/>
                    <input type="text" placeholder='Faculdade' value={university} onChange={(e)=> setUniversity(e.target.value)}/>
                    <input type="text" placeholder='Curso' value={course} onChange={(e)=> setCourse(e.target.value)}/>
                    <input type="text" placeholder='Número de Telefone' value={phoneNumber} onChange={(e)=> setPhoneNumber(e.target.value)}/>

                    <button type="submit" onClick={handleOnSubmit}><p>Cadastrar</p></button>
            </div>
            
        </div>
    )
}

export default Signup;