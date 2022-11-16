import styles from "./MovieCard.module.css"
import {Movie} from "../hooks/useGetMovies";
import {cva} from "class-variance-authority";

const movieCard = cva(styles.card, {
    variants: {
        state: {
            selected: styles.selected
        }
    }
});

type Props = Movie & {
    onClick: () => void;
    selected: boolean;
}

export const MovieCard = ({imageSrc, title, duration, year, onClick, selected}: Props) => (
    <div className={movieCard({state: selected ? "selected" : null})} onClick={onClick}>
        <img className={styles.image} src={imageSrc} alt={title}/>
        <div className={styles.info}>
            <div className={styles.title}>{title}</div>
            <div className={styles.durationAndYear}>
                <div>{year}</div>
                <div>{duration}</div>
            </div>
        </div>
    </div>
);