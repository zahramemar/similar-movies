import styles from "./MovieGrid.module.css";
import {MovieCard} from "./MovieCard";
import {Movie} from "../hooks/useGetMovies";

type Props = {
    movies: Movie[];
    onMovieClick: (movieId: string) => void;
    selectedMovies: string[];
}

export const MovieGrid = ({ movies, selectedMovies, onMovieClick }: Props) =>
    <div className={styles.container}>
        {movies?.map(movie => <MovieCard key={movie.id} {...movie} selected={selectedMovies.includes(movie.id)}
                                         onClick={() => onMovieClick(movie.id)}/>)}
    </div>