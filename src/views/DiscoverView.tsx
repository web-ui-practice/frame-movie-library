import { movies } from '../data/movies';
import MovieCard from '../components/MovieCard/MovieCard';
import './DiscoverView.css';

function DiscoverView () {
    return (
        <main className="discover">
         <div className='discover__heading'>
          <h1 className='discover__title'>Discover</h1>
          <p className='discover__description'>Find a story worth your evening.</p>
         </div>
         <section className='discover__collection'>
            <p className="discover__summary">{movies.length} films to discover</p>
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