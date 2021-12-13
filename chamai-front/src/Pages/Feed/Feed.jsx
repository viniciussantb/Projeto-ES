import React, { useContext, useEffect, useState } from 'react';
import EmailContext from '../../context/EmailContext';
import { FeedService } from '../../services/FeedService';
import styles from './Feed.module.css'

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
                
                <p className={styles.fotoUsuario}>{foto}</p>
                <div className={styles.dadosUsuario}>
                    <p>{usuario.nome}</p>
                    <p>{usuario.faculdade}</p>
                    <p>{usuario.curso}</p>

                </div>

                <div className={styles.dadosCarro}>
                    <img src={carro} width="25"/>
                    <p>{usuario.carro}</p>
                    <p>{usuario.corCarro}</p>
                    <p>{usuario.placaCarro}</p>

                </div>
            
            </div>

            <div className={styles.feedCaronas}>
                CONTEUDO FEED
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                CONTEUDO
                CONTEUDO FEED
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                CONTEUDO
                CONTEUDO FEED
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                CONTEUDO
                CONTEUDO FEED
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                CONTEUDO

              

            </div>

            

        </div>
    </div>
  )

}

export default Feed;