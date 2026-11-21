import type { Movie } from '../../types';
import BookmarkIcon from '../icons/BookmarkIcon';
import WatchlistButton from '../WatchlistButton/WatchlistButton';
import './MovieCard.css';

interface MovieCardProps {
  movie: Movie;
  isSaved: boolean;
  onSelect: (movie: Movie) => void;
  onToggleWatchlist: (movieId: number) => void;
}

function MovieCard({ movie, isSaved, onSelect, onToggleWatchlist }: MovieCardProps) {
  return (
    <article className="movie-card">
      <figure className="movie-card__poster">
        <img src={movie.posterUrl} alt={`${movie.title} poster`} />
        <div className="movie-card__letters" aria-hidden="true">
          <span>{movie.title}</span>
          <span>A Frame Fiction</span>
        </div>
        {isSaved && (
          <span className="movie-card__badge" aria-hidden="true">
            <BookmarkIcon />
          </span>
        )}
      </figure>
      <div className="movie-card__details">
        <h2 className="movie-card__title">
          {/* The button stretches over the whole card (see ::after in CSS),
              so the card is clickable and reachable with Tab + Enter */}
          <button
            type="button"
            className="movie-card__button"
            aria-haspopup="dialog"
            onClick={() => onSelect(movie)}
          >
            {movie.title}
          </button>
        </h2>
        <div className="movie-card__info">
          <p className="movie-card__meta">
            {movie.year} · {movie.genre}
          </p>
          <p className="movie-card__rating">
            <span aria-hidden="true">★</span> {movie.rating.toFixed(1)}
          </p>
        </div>
      </div>
      <WatchlistButton movie={movie} isSaved={isSaved} onToggle={onToggleWatchlist} />
    </article>
  );
}

export default MovieCard;
