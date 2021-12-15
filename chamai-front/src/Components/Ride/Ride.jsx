import styles from './Ride.module.css'


function Ride({ rideProps }) {
    return (
        <div className={styles.rideContainer}>
            <div className={styles.userPerfil}>
                <div className={styles.userPhoto}>

                </div>

                <div className={styles.userData}>
                    <p>Nome</p>
                    <p>Faculdade</p>
            
                </div>
            
            </div>

            <div className={styles.rideData}>
                <div className={styles.rideDataLeft}>
                    <p>Partida</p>
                    <p>Chegada</p>
                    <p>{rideProps.price}</p>

                </div>

                <div className={styles.rideDataRight}>
                    <p>{rideProps.date}</p>
                    <p>Hora</p>
                    <p>Vagas</p>

                </div>
            </div>
        </div>
    )
}

export default Ride