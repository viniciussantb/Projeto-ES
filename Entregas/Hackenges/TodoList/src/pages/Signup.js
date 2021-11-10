import SignupForm from '../components/Signup/SignupForm';
import { useNavigate } from 'react-router-dom';

function Signup() {
    const navigate = useNavigate();

    const userSignUp = (userData) => {
        fetch('http://localhost:8080/signup', {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "Access-Control-Allow-Origin": "*"},
            body: JSON.stringify(userData)
        })
        .then((res)=> res.json())
        .then((data)=>{
            console.log(data);
            navigate('/', {replace: true});
        }).catch((err)=> console.log(err));
        console.log(userData);
    }

    return (
        <div>
            <SignupForm userSignUp={userSignUp}/>
        </div>
    )
}

export default Signup
