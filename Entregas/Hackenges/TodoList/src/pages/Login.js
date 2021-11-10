import { useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/Login/LoginForm';
import { AuthApiContext } from '../context/AuthApiContext';
import { EmailContext } from '../context/EmailContext';

function Login() {
    const {setAuth} = useContext(AuthApiContext);
    const {setEmail} = useContext(EmailContext);
    const navigate = useNavigate();

    const userLogin = (userData) => {
        fetch('http://localhost:8080/', {
            method: "POST",
            headers: {
                "content-type": "application/json",
                'Access-Control-Allow-Origin': '*'},
            body: JSON.stringify(userData)
        })
        .then((res)=>{
            if(res.status === 400){
                alert('User not found');
                throw new Error(res.status);
            }
            else{
                setAuth(true);
                setEmail(userData.email);
                return navigate('/todo', {replace: true});
            }
        }).catch((err) => {
            console.log(err);
        });
    }

    return (
        <LoginForm userLogin={userLogin}/>
    )
}

export default Login
