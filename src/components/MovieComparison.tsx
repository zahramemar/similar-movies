import styles from "./MovieComparison.module.css";
import {Movie} from "../hooks/useGetMovies";
import {Fragment} from "react";

const MovieBox = ({movie}: {movie: Movie}) => (
    <div className={styles.movieDiv}>
        <img className={styles.movieImg} src={movie.imageSrc} alt={movie.title} />
    </div>
);

type Props = {
    left: Movie;
    right: Movie;
    onClear: () => void;
}

const ComparisonInfo = ({onClear}: Props) => {
    const similarities = [<>Movie Rating: 8/10</>];

    return (
        <div className={styles.comparisonInfo}>
            <h3>YES</h3>
            <button type={"button"} onClick={onClear}>clear selection</button>
            <div>
                {similarities.map((similarity, idx) => (
                    <Fragment key={idx}>{similarity}</Fragment>
                ))}
            </div>
        </div>
    )
}

export const MovieComparison = ({left, right, onClear}: Props) => (
    <div className={styles.container}>
        <MovieBox movie={left} />
        <ComparisonInfo left={left} right={right} onClear={onClear} />
        <MovieBox movie={right} />
    </div>
)