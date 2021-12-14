import styles from './Ride.module.css'


function Ride() {
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
                    <p>Valor</p>

                </div>

                <div className={styles.rideDataRight}>
                    <p>Data</p>
                    <p>Hora</p>
                    <p>Vagas</p>

                </div>
            </div>
        </div>
    )
}

export default Ride