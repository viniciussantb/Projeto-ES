import React, { useContext, useEffect, useState } from 'react';
import EmailContext from '../../context/EmailContext';
import { FeedService } from '../../services/FeedService';
import styles from './Feed.module.css';

//Importando o componente Ride
import Ride from '../../Components/Ride/Ride'

import CreateRide from '../../Components/Buttons/CreateRide/CreateRide';

// Brother, estou importando o icone do carro e uma foto de perfil padrão pra testar a aplicação
// Salvei os dois itens dentro da pasta Feed, (carro.png e perfilPadrao.png).
import carro from './carro.png';
import perfilPadrao from './perfilPadrao.png';

const Feed = () => {
  const [ rides, setRides ] = useState([]);

  useEffect(() => {
    async function getRides() {
      const response = await FeedService.rides();
      return response;
    }
    const response = getRides();
    if (response.status === 200) {
      setRides(response.status);
    }
    console.log(response);
  }, []);

  async function getRides() {
    const response = await FeedService.rides();
    return response;
  }

  return(
    <div className={styles.conteudoFeed}>

        <div className={styles.feed}>

            <div className={styles.painelUsuario}>
                
                <img className={styles.fotoUsuario} src={perfilPadrao} />
                
                
                <div className={styles.dadosUsuario}>
                    <p>{"Vinícius"}</p>
                    <p>{"UFPE"}</p>
                    <p>{"Sistemas de Informação"}</p>
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
                <Ride />
                <Ride />
                <Ride />
                <Ride />
                <Ride />
            </div>
      
        </div>
    </div>
  )

}

export default Feed;