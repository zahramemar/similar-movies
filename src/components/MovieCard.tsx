import styles from "./MovieCard.module.css"

type Props = {
    imageSrc: string;
    title: string;
    duration: string;
    year: number;
}

export const MovieCard = ({imageSrc, title, duration, year}: Props) => (
    <div className={styles.card}>
        <img className={styles.image} src={imageSrc} alt={title} />
        <div className={styles.info}>
            <div className={styles.title}>{title}</div>
            <div>{duration}</div>
            <div>{year}</div>
        </div>
    </div>
)