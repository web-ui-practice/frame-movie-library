import { movies } from '../data/movies';
import MovieCard from '../components/MovieCard/MovieCard';
import { TEXTS } from '../constants/texts';

function DiscoverView() {
  return (
    <main className="discover">
      <div className="discover__heading">
        <h1 className="discover__title">{TEXTS.discover.title}</h1>
        <p className="discover__description">{TEXTS.discover.subtitle}</p>
      </div>
      <section className="discover__collection">
        <p className="discover__summary">{movies.length} {TEXTS.discover.summary}</p>
        <div className="movie-grid">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default DiscoverView;
