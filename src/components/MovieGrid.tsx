import styles from "./MovieGrid.module.css";
import {MovieCard} from "./MovieCard";
import {useGetMovies} from "../hooks/useGetMovies";

export const MovieGrid = () => {
    const {data: movies, isError, isLoading} = useGetMovies();

    if (isLoading) return <>Loading...</>;

    if (isError) return <>Error</>;

    return <div className={styles.container}>
        {movies?.map(movie => <MovieCard key={movie.title} {...movie} />)}
    </div>
}