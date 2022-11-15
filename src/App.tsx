import './App.css';
import styles from './App.module.css';
import {MovieGrid} from "./components/MovieGrid";
import {MovieComparison} from "./components/MovieComparison";

function App() {
	return (
		<div className={styles.appContainer}>
			<h1>Are These Similar?</h1>
			<MovieComparison />
			<MovieGrid />
		</div>
	);
}

export default App;
