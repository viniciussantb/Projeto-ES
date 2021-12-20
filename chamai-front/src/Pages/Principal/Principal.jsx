import styles from './Principal.module.css';




function Principal() {
    return (

     
        <div className={styles.containerPrincipal}>
            

            <div className={styles.botoesPrincipal}>
                <button className={styles.botaoLoginPrincipal}>
                    LOGIN

                </button>

                <button className={styles.botaoCadastrarPrincipal}>
                    CADASTRO

                </button>

                <p></p>

            </div>
           
           


            <div className={styles.containerCarrossel}>
                <div className={styles.Carrossel}>

                
                </div>
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

            <div className={styles.containerContent}>
                
            </div>

            <div className={styles.containerAboutUs}>
                
            </div>



        
        </div>
    )
}

export default Principal

