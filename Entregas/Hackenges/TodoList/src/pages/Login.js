import React from 'react'
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/Login/LoginForm';

function Login() {

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
            if(!res.ok){
                alert('User not found');
                throw new Error(res.status);
            }
            else return res.json();
        })
        .then((data)=>{
            console.log(data.msg);
            navigate('/todo', {replace: true});
        }).catch((err) => {
            console.log(err);
        });
    }

    return (
        <LoginForm userLogin={userLogin}/>
    )
}

export default Login
