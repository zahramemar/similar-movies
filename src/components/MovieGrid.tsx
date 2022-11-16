import styles from "./MovieGrid.module.css";
import {MovieCard} from "./MovieCard";
import {Movie} from "../hooks/useGetMovies";

type Props = {
    movies: Movie[];
}

export const MovieGrid = ({ movies }: Props) =>
    <div className={styles.container}>
        {movies?.map(movie => <MovieCard key={movie.title} {...movie} />)}
    </div>