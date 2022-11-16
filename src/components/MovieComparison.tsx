import styles from "./MovieComparison.module.css";
import {Movie} from "../hooks/useGetMovies";
import {Fragment} from "react";

type Props = {
    left: Movie;
    right: Movie;
}

const MovieBox = ({movie}: {movie: Movie}) => (
    <div className={styles.movieDiv}>
        <img className={styles.movieImg} src={movie.imageSrc} alt={movie.title} />
    </div>
);

const ComparisonInfo = () => {
    const similarities = [<>Movie Rating: 8/10</>];

    return (
        <div className={styles.comparisonInfo}>
            <h3>YES</h3>
            <button>clear selection</button>
            <div>
                {similarities.map((similarity, idx) => (
                    <Fragment key={idx}>{similarity}</Fragment>
                ))}
            </div>
        </div>
    )
}

export const MovieComparison = ({left, right}: Props) => (
    <div className={styles.container}>
        <MovieBox movie={left} />
        <ComparisonInfo />
        <MovieBox movie={right} />
    </div>
)