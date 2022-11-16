import styles from "./MovieComparison.module.css";
import { Movie, Product } from "../hooks/useGetMovies";

const MovieBox = ({ movie }: { movie: Movie }) => (
  <div className={styles.movieDiv}>
    <img className={styles.movieImg} src={movie.imageSrc} alt={movie.title} />
  </div>
);

function durationToStr(durMillis: number): string {
  if (durMillis < 1000 * 60 * 60) return "short";
  if (durMillis < 2 * 1000 * 60 * 60) return "medium";
  return "long";
}

function intersection<T>(a: T[], b: T[]): T[] {
  return a.filter((x) => b.includes(x));
}

type ComparisonCriteria = {
  test: (a: Product, b: Product) => boolean;
  title: (a: Product, b: Product) => string;
};

const comparisonCriteria: ComparisonCriteria[] = [
  {
    title: (prod) => `Both are produced at ${prod.production.year}`,
    test: (a, b) => a.production.year === b.production.year,
  },
  {
    title: (prod) => `Both have parental rating of ${prod.parentalRating}`,
    test: (a, b) => a.parentalRating === b.parentalRating,
  },
  {
    title: (a, b) =>
      `Both have similar IMDB rating of ${a.imdb?.rating} and ${b.imdb?.rating}`,
    test: (a, b) =>
      a.imdb?.rating != null &&
      b.imdb?.rating != null &&
      Math.round(+a.imdb.rating) === Math.round(+b.imdb.rating),
  },
  {
    title: (prod) =>
      `Both have ${durationToStr(prod.duration.milliseconds)} duration`,
    test: (a, b) =>
      durationToStr(a.duration.milliseconds) ===
      durationToStr(b.duration.milliseconds),
  },
  {
    title: (a, b) =>
      `Both have these actors: ${intersection(
        a.people.actors ?? [],
        b.people.actors ?? []
      ).join(", ")}`,
    test: (a, b) =>
      intersection(a.people.actors ?? [], b.people.actors ?? []).length > 0,
  },
];

type Props = {
  left: Movie;
  right: Movie;
  onClear: () => void;
};

const ComparisonInfo = ({ left, right, onClear }: Props) => {
  const similarities = comparisonCriteria
    .filter((c) => c.test(left.data, right.data))
    .map((c) => c.title(left.data, right.data));

  return (
    <div className={styles.comparisonInfo}>
      <h3>{similarities.length >= 3 ? "YES" : "NO"}</h3>
      <button type={"button"} onClick={onClear}>
        clear selection
      </button>
      <div>
        {similarities.map((similarity, idx) => (
          <div key={idx}>{similarity}</div>
        ))}
      </div>
    </div>
  );
};

export const MovieComparison = ({ left, right, onClear }: Props) => (
  <div className={styles.container}>
    <MovieBox movie={left} />
    <ComparisonInfo left={left} right={right} onClear={onClear} />
    <MovieBox movie={right} />
  </div>
);
