import React, {
    useState
} from "react";
import LoginImg from '../../assets/logo-login.png';
import LoginForm from "./LoginForm";
import './login.css';

const Login = () => {
    const onSubmit = (data) => {
        fetch('http://localhost:8080/login', {
            method : "POST",
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify(data)
        }).then((res) => res.json())
        .then((data)=>{
            console.log(data);
        })
        .catch(err => console.log(err));
    }

    return (
        <div className="main-container">
            <LoginForm onSubmit={onSubmit}/>
        </div>
    );
};

export default Login;