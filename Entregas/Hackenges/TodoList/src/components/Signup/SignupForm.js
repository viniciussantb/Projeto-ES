import {useState} from 'react';

function SignupForm({ userSignUp }) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = (e)=>{
        e.preventDefault();
        
        if(!name){
            alert('Name is required');
            return
        }else if(!email){
            alert('Email is required');
            return
        }else if(!password){
            alert('Password is required');
            return
        }

        userSignUp({name, email, password});
        
    }

    return (
        <div className='container'>
            <h1>Sign Up</h1>
            <form className='add-form' onSubmit={onSubmit}>
                <div className='form-control'>
                    <label>Name</label>
                    <input type='text' placeholder='Enter Name' value={name} onChange={(e)=> setName(e.target.value)}/>
                </div>
                <div className='form-control'>
                    <label>Email</label>
                    <input type='text' placeholder='Enter Email' value={email} onChange={(e)=> setEmail(e.target.value)}/>
                </div>
                <div className='form-control'>
                    <label>Password</label>
                    <input type='password' placeholder='Enter Password' value={password} onChange={(e)=> setPassword(e.target.value)}/>
                </div>
                <input type='submit' value='Sign Up' className='btn btn-block'/>
            </form>
        </div>
    )
}

export default SignupForm
