import styles from "./MovieComparison.module.css";
import {Movie, Product} from "../hooks/useGetMovies";

const MovieBox = ({movie}: {movie: Movie}) => (
    <div className={styles.movieDiv}>
        <img className={styles.movieImg} src={movie.imageSrc} alt={movie.title} />
    </div>
);

type ComparisonCriteria = {
    test: (a: Product, b: Product) => boolean;
    title: (prod: Product) => string;
}

const comparisonCriteria: ComparisonCriteria[] = [
    {
        title: prod => `Both are produced at ${prod.production.year}`,
        test: (a, b) => a.production.year === b.production.year,
    },
    {
        title: prod => `Both have parental rating of ${prod.parentalRating}`,
        test: (a, b) => a.parentalRating === b.parentalRating,
    }
]

type Props = {
    left: Movie;
    right: Movie;
    onClear: () => void;
}

const ComparisonInfo = ({left, right, onClear}: Props) => {
    const similarities = comparisonCriteria
        .filter(c => c.test(left.data, right.data))
        .map(c => c.title(left.data));

    return (
        <div className={styles.comparisonInfo}>
            <h3>{similarities.length === 2 ? "YES" : "NO"}</h3>
            <button type={"button"} onClick={onClear}>clear selection</button>
            <div>
                {similarities.map((similarity, idx) => (
                    <div key={idx}>{similarity}</div>
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