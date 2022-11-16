import './App.css';
import styles from './App.module.css';
import {MovieGrid} from "./components/MovieGrid";
import {MovieComparison} from "./components/MovieComparison";
import {useGetMovies} from "./hooks/useGetMovies";

function App() {
	const {data: movies, isError, isLoading} = useGetMovies();

	if (isLoading) return <>Loading...</>;

	if (isError) return <>Error</>;

	return (
		<div className={styles.appContainer}>
			<h1 className={styles.header}>Are These Similar?</h1>
			<MovieComparison  left={movies![0]} right={movies![1]} />
			<MovieGrid movies={movies!} />
		</div>
	);
}

export default App;
