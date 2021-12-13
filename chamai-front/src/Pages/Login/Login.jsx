import React, {
    useState,
    useContext
} from "react";
import LoginForm from "./LoginForm";
import { EmailContext } from "../../context/EmailContext";
import { LoginService } from "../../services/LoginService";
import { useNavigate } from "react-router";
import './login.css';

const Login = () => {
    const {email, setEmail} = useContext(EmailContext);
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        fetch('http://localhost:8080/login', {
            method : "POST",
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify(data)
          }).then((res) => {
                console.log(res.status);
                if (res.status === 200){
                    setEmail(data.userEmail);
                    navigate('/feed', {replace: true})
                } else {
                    alert('User not found!');
                }
            }).catch(err => console.log(err));
    }

    return (
        <div className="main-container">
            <LoginForm onSubmit={onSubmit}/>
        </div>
    );
};

export default Login;