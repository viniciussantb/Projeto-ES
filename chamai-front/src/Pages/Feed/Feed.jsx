import React, { useContext, useEffect, useState } from 'react';
import { EmailContext } from '../../context/EmailContext';
import { FeedService } from '../../services/FeedService';
import styles from './Feed.module.css';

//Importando o componente Ride
import Ride from '../../components/Ride/Ride'

import CreateRide from '../../components/Buttons/CreateRide/CreateRide';

// Brother, estou importando o icone do carro e uma foto de perfil padrão pra testar a aplicação
// Salvei os dois itens dentro da pasta Feed, (carro.png e perfilPadrao.png).
import carro from './carro.png';
import perfilPadrao from './perfilPadrao.png';
import { RidesContext } from '../../context/RidesContext';



const Feed = () => {
  const {rides} = useContext(RidesContext);
  const [ user, setUser ] = useState('');
  const {email, setEmail} = useContext(EmailContext);

  useEffect(() => {
    console.log('rides');
    console.log(rides);
    fetch('http://localhost:8080/user',{
    method: "POST",
    headers: { 'content-type' : 'application/json' },
    body: JSON.stringify({email: email}),
    }).then(res => res.json())
      .then(data => {
        setUser(data);
        console.log(user);
      })
      .catch(err => console.log(err));
  }, []);

  async function getRides() {
    await fetch('http://localhost:8080/rides',{
      method: "GET",
      headers: { 'content-type' : 'application/json' },
      }).then(res => res.json())
        .then(data => {
          rides = data;
          console.log(rides);
        })
        .catch(err => console.log(err));
  }

  const rideList = rides.map(ride => <Ride key={ride._id} rideProps={ride}/>)
  return(
    <div className={styles.conteudoFeed}>

        <div className={styles.feed}>

            <div className={styles.painelUsuario}>
                
                <img className={styles.fotoUsuario} src={perfilPadrao} />
                
                
                <div className={styles.dadosUsuario}>
                    <p>{user.name}</p>
                    <p>{user.university}</p>
                    <p>{user.course}</p>
                    <CreateRide />
                    
                   
                </div>
                

                <div className={styles.dadosCarro}>
                    <img src={carro} width="25"/>
                    <p>{"Uno"}</p>
                    <p>{"Branco"}</p>
                    <p>{"Placa qualquer"}</p>

                </div>
            
            </div>

            <div className={styles.feedCaronas}>
              {rideList}
            </div>
      
        </div>
    </div>
  )

}

export default Feed;