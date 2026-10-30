import type {Movie} from '../../types';
import './MovieCard.css';

interface MovieCardProps {
    movie: Movie;
}

function MovieCard ({movie}: MovieCardProps) {
    return (
        <article className='movie-card'>
            <figure className='movie-card__poster'>
                <img src={movie.posterUrl} alt={`${movie.title} poster`} />
                <div className='movie-card__letters' aria-hidden='true'>
                    <span>{movie.title}</span>
                    <span>A Frame Fiction</span>
                </div>
            </figure>
            <div className='movie-card__details'>
             <h2 className='movie-card__title'>{movie.title}</h2>
             <div className='movie-card__info'>
              <p className='movie-card__meta'>{movie.year} · {movie.genre}</p>
              <p className='movie-card__rating'>
                <span aria-hidden='true'>★</span> {movie.rating.toFixed(1)}
              </p>
             </div>
            </div>
        </article>
    );
}

export default MovieCard;