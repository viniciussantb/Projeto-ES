import React, {
    useState,
    useContext
} from "react";
import LoginForm from "./LoginForm";
import { EmailContext } from "../../context/EmailContext";
import { LoginService } from "../../services/LoginService";
import { useNavigate } from "react-router";
import './login.css';
import { RidesContext } from "../../context/RidesContext";

const Login = () => {
    const {rides, setRides} = useContext(RidesContext);
    const {email, setEmail} = useContext(EmailContext);
    const navigate = useNavigate();

    async function getRides() {
        console.log('getRides');
        await fetch('http://localhost:8080/rides',{
          method: "GET",
          headers: { 'content-type' : 'application/json' },
          }).then(res => res.json())
            .then(data => {
                setRides(data);
            })
            .catch(err => console.log(err));
      }

    const onSubmit = async (data) => {
        await getRides();
        fetch('http://localhost:8080/login', {
            method : "POST",
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify(data)
          }).then((res) => {
                console.log(res.status);
                if (res.status === 200){
                    setEmail(data.email);
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