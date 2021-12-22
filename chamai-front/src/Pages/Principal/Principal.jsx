import styles from './Principal.module.css';
import rapaz_carro from './rapaz_carro.png'
import moca_carro from './moca_carro.png';
import antonio from './antonio.jpg';
import mayara from './mayara.png';
import neto from './neto.png';
import santiago from './santiago.jpg';
import oliveira from './oliveira.jpg';
import { useNavigate } from "react-router";




function Principal() {
    const navigate = useNavigate();

    return (

     
        <div className={styles.containerPrincipal}>
            

            <div className={styles.botoesPrincipal}>
                <button   className={styles.botaoLoginPrincipal} onClick={()=> navigate('/login', {replace: true})}>
                    LOGIN

                </button>

                <button className={styles.botaoCadastrarPrincipal} onClick={()=> navigate('/signup', {replace: true})}>
                    CADASTRO

                </button>

                <p></p>

            </div>
           

            <div className={styles.containerConteudo1}>
                <div className={styles.Conteudo1Foto}>
                    <img src={rapaz_carro} width="500px"/>
                
                </div>

                <div className={styles.Conteudo1Texto}>
                    <p>
                        Faça parte da maior comunidade de caronas universitárias do Brasil!!
                    </p>
                
                </div>

                <p></p>
            </div>

            <div className={styles.containerContact}>
                <div className={styles.textContact}>
                    <p>
                    Entre em contato com nossa equipe para reportar algum problema, fazer um elogio ou dar um feed back sobre nosso trabalho.
                    <br></br>
                    <br></br>
                    Tenham uma boa viagem!
                    </p>
                
                </div>

                <div className={styles.formContact}>
                    <form>
                        <input type="name" placeholder="Digite seu nome" /><br></br>
                        <input type="email" placeholder="Digite seu email" /><br></br> 
                        <textarea type="text" placeholder="Digite o texto"/><br></br> 
                        <button className={styles.botaoSubmit}>Enviar</button>

                    </form>
                
                </div>
            </div>

            <div className={styles.containerConteudo2}>
                <div className={styles.Conteudo2Foto}>
                    <img src={moca_carro} width="400px"/>
                
                </div>

                <div className={styles.Conteudo2Texto}>
                    <p>
                        Torne sua experiência universitária mas rápida, agradável e barata.
                    </p>
                
                </div>

                <p></p>
            </div>

            <div className={styles.containerAboutUs}>

                <div class={styles.membrosGrupo1Container} >

                    <div class={styles.membrosGrupo1}>
                        <img src={antonio} />

                        <div classeName={styles.membrosGrupo1Content}>
                            <p>Antonio Marcelo</p>
                            <p>Desenvolvedor Front-end</p>

                        </div>

                    </div>

                    <div class={styles.membrosGrupo1}>
                        <img src={mayara} />

                        <div classeName={styles.membrosGrupo1Content}>
                            <p>Mayara Gomes</p>
                            <p>Suporte ao projeto</p>
                        </div>

                    </div>

                    <div class={styles.membrosGrupo1}>
                        <img src={neto} />
                        <div classeName={styles.membrosGrupo1Content}>
                            <p>Neto Cassimiro</p>
                            <p>Analista de comunicação</p>
                        </div>
                    </div>
                    
                    <p className={styles.clearBoth1}>

                    </p>

                </div>

        
                <div class={styles.membrosGrupo2Container} >
                    <div class={styles.membrosGrupo2}>

                        <img src={oliveira} />

                        <div classeName={styles.membrosGrupo2Content}>
                           <p>Vinícius Oliveira</p>
                           <p>UX/UI Designer</p>
                           <p>Desenvolvedor Front-end</p>
                        </div>

                    </div>

                    <div class={styles.membrosGrupo2}>
                        <img src={santiago} />
                        <div classeName={styles.membrosGrupo2Content}>
                            <p>Vinícius Santiago</p>
                            <p>Desenvolvedor Back-end</p>
        
                        </div>
                    </div>

                </div>

                <p className={styles.clearBoth}></p>
                
            </div>



        
        </div>
    )
}

export default Principal

