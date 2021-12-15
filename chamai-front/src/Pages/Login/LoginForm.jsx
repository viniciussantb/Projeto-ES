import React, {
  useState
} from "react";
import LoginImg from '../../assets/logo-login.png';
import './login.css';


function LoginForm({ onSubmit }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleOnSubimit(e){
    e.preventDefault();

    const data = {
      email,
      password
    }

    onSubmit(data);
  }

  return (
    <div>
      <div className="main-container">
        <div className='photo-description'>
            <img src={LoginImg} alt="" />
        </div>

        
        <div className="div-buttons-login">
                <p className='login-title'>Login</p>
                <input type="email" placeholder='E-mail' value={email} onChange={(e)=> setEmail(e.target.value)} />
                <input type="password" placeholder='Senha' value={password} onChange={(e)=> setPassword(e.target.value)}/>
                <button type='submit' onClick={handleOnSubimit}><p>Entrar</p></button>
        </div>
        
      </div>
    </div>
  )
}

export default LoginForm
