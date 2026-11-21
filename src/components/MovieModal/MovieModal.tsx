import { useEffect, useRef, type MouseEvent } from 'react';
import type { Movie } from '../../types';
import WatchlistButton from '../WatchlistButton/WatchlistButton';
import './MovieModal.css';

interface MovieModalProps {
  movie: Movie;
  isSaved: boolean;
  onClose: () => void;
  onToggleWatchlist: (movieId: number) => void;
}

function MovieModal({ movie, isSaved, onClose, onToggleWatchlist }: MovieModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    // Remember which element had focus (the card button) to return focus there later
    const previouslyFocused = document.activeElement as HTMLElement | null;

    // showModal(): makes the page behind inert, traps focus inside, closes on Escape
    if (!dialog.open) dialog.showModal();

    // On unmount just return focus. We don't call dialog.close() here:
    // it fires the "close" event -> onClose, which breaks in React StrictMode
    // (effects run twice in dev). The dialog disappears with the component anyway.
    return () => {
      previouslyFocused?.focus();
    };
  }, []);

  // Click on the backdrop: the click target is the <dialog> itself, not its content
  function handleBackdropClick(event: MouseEvent<HTMLDialogElement>) {
    if (event.target === event.currentTarget) {
      onClose();
    }
  }

  return (
    <dialog
      ref={dialogRef}
      className="movie-modal"
      aria-labelledby="movie-modal-title"
      aria-describedby="movie-modal-description"
      onClose={onClose}
      onClick={handleBackdropClick}
    >
      <div className="movie-modal__content">
        <button
          type="button"
          className="movie-modal__close"
          aria-label="Close movie details"
          onClick={onClose}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
            <path
              d="M1 1l12 12M13 1L1 13"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <figure className="movie-modal__poster">
          <img src={movie.posterUrl} alt={`${movie.title} poster`} />
          <div className="movie-modal__letters" aria-hidden="true">
            <span>{movie.title}</span>
            <span>A Frame Fiction</span>
          </div>
        </figure>

        <div className="movie-modal__info">
          {/* Always rendered so the layout doesn't jump; empty when not saved */}
          <p className="movie-modal__status">{isSaved && 'In your watchlist'}</p>

          <h2 id="movie-modal-title" className="movie-modal__title">
            {movie.title}
          </h2>

          <p className="movie-modal__meta">
            <span>{movie.year}</span>
            <span aria-hidden="true">/</span>
            <span>{movie.genre}</span>
          </p>

          <p className="movie-modal__rating">
            <svg className="movie-modal__star" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3l-5.9 3.3 1.3-6.6-4.9-4.6 6.6-.8z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
            </svg>
            <strong>{movie.rating.toFixed(1)}</strong>
            <span className="movie-modal__rating-max">/ 10</span>
          </p>

          <div className="movie-modal__synopsis">
            <h3 className="movie-modal__label">Synopsis</h3>
            <p id="movie-modal-description" className="movie-modal__description">
              {movie.description}
            </p>
          </div>

          <div className="movie-modal__actions">
            <WatchlistButton
              movie={movie}
              isSaved={isSaved}
              onToggle={onToggleWatchlist}
              size="large"
            />
            {/* role="status": screen readers announce the change after a click */}
            <p className="movie-modal__hint" role="status">
              {isSaved ? 'Saved for your next movie night.' : 'Keep it for later.'}
            </p>
          </div>
        </div>
      </div>
    </dialog>
  );
}

export default MovieModal;
