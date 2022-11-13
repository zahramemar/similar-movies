import styles from "./MovieGrid.module.css";
import {MovieCard} from "./MovieCard";

export const MovieGrid = () => {
    return <div className={styles.container}>
        <MovieCard
            title="Johnny vs Amber: From Love to Hate"
            duration="43 min"
            year={2022}
            imageSrc="https://via.placeholder.com/240x320.png?text=Johnny%20vs%20Amber%3A%20From%20Love%20to%20Hate"
        />
    </div>
}