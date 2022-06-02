import videoBg from '../assets/video/videoBg.mp4'
import styles from './videoBg.module.css'

function BackgroundHome () {
    return(
        <div className={styles.divVideo}>
           <video src={videoBg} autoPlay loop muted />
            <h1>Boi Dourado</h1>
        </div>
    )
}

export default BackgroundHome
