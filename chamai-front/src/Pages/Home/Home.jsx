import React, { useEffect } from "react";
import HomeImg from '../../assets/logo-home.png'
import { useNavigate } from "react-router";
import './home.css'

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="main-home-container">
            <div className='photo-home-description'>
                <img src={HomeImg} alt="" />
                <p>Ajudamos a unir histórias e propósitos em forma de caronas universitárias</p>
            </div>

            
            <div className="div-home-buttons">
                    <button className='login' onClick={()=> navigate('/login', {replace: true})}><p>Login</p></button>
                    <button className='cadastro' onClick={()=> navigate('/signup', {replace: true})}> <p>Cadastro</p></button>
            </div>
            
        </div>
    )
}

export default Home;