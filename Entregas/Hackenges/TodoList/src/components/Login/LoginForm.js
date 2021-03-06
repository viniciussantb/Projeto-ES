import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function LoginForm({ userLogin }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const onClick = (e)=>{
        e.preventDefault();

        navigate('/signUp', {replace: true});
    }

    const onSubmit = (e)=>{
        e.preventDefault();

        if(!email){
            alert("Email is required");
            return
        }else if(!password){
            alert("Password is required");
            return
        }
        userLogin({email, password});
    }

    return (
        <div className='container'>
            <h1>Login</h1>
            <form className='add-form' onSubmit={onSubmit}>
                <div className='form-control'>
                    <label>Email</label>
                    <input type='text' placeholder='Enter Email' value={email} onChange={(e)=> setEmail(e.target.value)}/>
                </div>
                <div className='form-control'>
                    <label>Password</label>
                    <input type='password' placeholder='Enter Password' value={password} onChange={(e)=> setPassword(e.target.value)}/>
                </div>
                <input type='submit' value='Login' className='btn btn-block'/>
            </form>

            <div>
                <input type='button' value='Sign-UP' className='btn btn-block' onClick={onClick}/>
            </div>
            
        </div>
    )
}

export default LoginForm
