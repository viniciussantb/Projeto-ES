import React, { useContext, useEffect, useState } from 'react';
import { EmailContext } from '../../context/EmailContext';
import { FeedService } from '../../services/FeedService';
import styles from './Feed.module.css';
import Ride from '../../Components/Ride/Ride'
import CreateRide from '../../Components/Buttons/CreateRide/CreateRide';
import carro from './carro.png';
import config from './config.png';
import oliveira from './oliveira.jpg'
import perfilPadrao from './perfilPadrao.png';
import { UserContext } from '../../context/UserContext';

import { useNavigate } from "react-router";

const Feed = () => {
  const [ rides, setRides ] = useState([]);
  const {user} = useContext(UserContext);

  const navigate = useNavigate();

  useEffect(() => {
    async function getRides() {
      await fetch('http://localhost:8080/rides', {
        method: 'GET',
        headers: { 'content-type' : 'application/json'},
      }).then(res => res.json())
        .then(data => {
          setRides(data);
        }).catch(err => console.log(err));
    }
    getRides();
  }, []);

  const rideList = rides.map( ride => <Ride key={ride._id} rideProps={ride}/> );

  return(
    <div className={styles.conteudoFeed}>

      <div className={styles.botoesFeed}>
                <button   className={styles.botaoLeaveFeed} onClick={()=> navigate('/', {replace: true})}>
                    SAIR

                </button>

                <p></p>

        </div>

    
        <div className={styles.feed}>

            <div className={styles.painelUsuario}>
                
                <img className={styles.fotoUsuario} src={user.image} />
                
                
                <div className={styles.dadosUsuario}>
                    <p>{user.name}</p>
                    <p>{user.university}</p>
                    <p>{user.course}</p>
                    <CreateRide />
                    
                   
                </div>
                

                <div className={styles.dadosCarro}>
                    <img></img>
                    <img src={config} width="30" className={styles.config} onClick={()=> navigate('/settings', {replace: true})} />
                    <img src={carro} width="25"/>
                    <p>{"Uno"}</p>
                    <p>{"Branco"}</p>
                    <p>{"Placa qualquer"}</p>

                </div>
            
            </div>

            <div className={styles.feedCaronas}>
              {rideList}
              
              <div>
                <p>
                </p>
              </div>
            </div>
      
        </div>
    </div>
  )

}

export default Feed;