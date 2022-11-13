import styles from "./MovieCard.module.css"
import {Movie} from "../hooks/useGetMovies";

export const MovieCard = ({imageSrc, title, duration, year}: Movie) => (
    <div className={styles.card}>
        <img className={styles.image} src={imageSrc} alt={title} />
        <div className={styles.info}>
            <div className={styles.title}>{title}</div>
            <div className={styles.durationAndYear}>
                <div>{year}</div>
                <div>{duration}</div>
            </div>
        </div>
    </div>
)