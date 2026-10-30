import { movies } from '../data/movies';
import MovieCard from '../components/MovieCard/MovieCard';

function DiscoverView () {
    return (
        <main>
         <h1>Discover</h1>
          <div className="movie-grid">
            {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </main>
    );
} 

export default DiscoverView;