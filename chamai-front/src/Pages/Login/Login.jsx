import React, {
    useState,
    useContext
} from "react";
import LoginForm from "./LoginForm";
import { EmailContext } from "../../context/EmailContext";
import { AuthApiContext } from "../../context/AuthApiContext";
import { LoginService } from "../../services/LoginService";
import { useNavigate } from "react-router";
import './login.css';
import { UserContext } from "../../context/UserContext";

const Login = () => {
    const { setUser } = useContext(UserContext);
    const { setAuth } = useContext(AuthApiContext);
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        fetch('http://localhost:8080/login', {
            method : "POST",
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify(data)
          }).then(res => res.json())
            .then(data => {
                setUser(data);
                setAuth(true);
                navigate('/feed', { replace: true })
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