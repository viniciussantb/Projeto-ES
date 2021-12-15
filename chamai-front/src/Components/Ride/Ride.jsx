import styles from './Ride.module.css'


function Ride({ rideProps }) {
    const rideDate = new Date(rideProps.date);
    return (
        <div className={styles.rideContainer}>
            <div className={styles.userPerfil}>
                <div className={styles.userPhoto}>

                </div>

                <div className={styles.userData}>
                    <p>{rideProps.name}</p>
                    <p>{rideProps.university}</p>
            
                </div>
            
            </div>

            <div className={styles.rideData}>
                <div className={styles.rideDataLeft}>
                    <p>{rideProps.meetingLocation}</p>
                    <p>{rideProps.endLocation}</p>
                    <p>{rideProps.price}</p>

                </div>

                <div className={styles.rideDataRight}>
                    <p>{rideDate.getDate()}/{rideDate.getMonth()}/{rideDate.getFullYear()}</p>
                    <p>{rideProps.time}</p>
                    <p>{rideProps.vagas}</p>

                </div>
            </div>
        </div>
    )
}

export default Ride