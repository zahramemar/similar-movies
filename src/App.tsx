import './App.css';
import styles from './App.module.css';
import {MovieGrid} from "./components/MovieGrid";
import {MovieComparison} from "./components/MovieComparison";
import {useGetMovies} from "./hooks/useGetMovies";
import {useCallback, useState} from "react";

function App() {
	const {data: movies, isError, isLoading} = useGetMovies();
	const [selected, setSelected] = useState<string[]>([]);

	const handleMovieClick = useCallback((movieId: string) => {
		if (selected.includes(movieId)) {
			setSelected(selected.filter(s => s !== movieId))
			return;
		}
		setSelected(selected => [...selected, movieId].slice(-2))
	}, [selected]);

	if (isLoading) return <>Loading...</>;

	if (isError || !movies) return <>Error</>;

	return (
		<div className={styles.appContainer}>
			<h1 className={styles.header}>Are These Similar?</h1>
			{selected.length === 2
				? <MovieComparison
					left={movies.find(m => m.id === selected[0])!}
					right={movies.find(m => m.id === selected[1])!}
					onClear={() => setSelected([])}
				/>
				: null
			}
			<MovieGrid movies={movies} selectedMovies={selected} onMovieClick={handleMovieClick} />
		</div>
	);
}

export default App;
