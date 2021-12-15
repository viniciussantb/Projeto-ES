import styles from './Rodape.module.css'
import git from './git.png'
import insta from './insta.png'
import youtube from './youtube.png'

function Rodape () {
    return (
        <footer className={styles.rodapeContainer}>
            <h4>Todos os direitos reservados</h4>
            <div>
                <ul>
                    <li><a href="https://github.com/viniciussantb/Projeto-ES/blob/main/Entregas/Itera%C3%A7%C3%A3o02/README.md" target="blank" ><img src={git} width="28px"/></a></li>
                    <li><a href="https://www.instagram.com/?hl=pt-br"target="blank" ><img src={insta} width="29px"/></a></li>
                    <li><a href="https://www.youtube.com/" target="blank" ><img src={youtube} width="35px"/></a></li>
                </ul>
                
            </div>
           
        </footer>
    )
}

export default Rodape