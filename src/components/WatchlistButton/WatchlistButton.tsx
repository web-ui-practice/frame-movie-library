import type { Movie } from '../../types';
import BookmarkIcon from '../icons/BookmarkIcon';
import './WatchlistButton.css';

interface WatchlistButtonProps {
  movie: Movie;
  isSaved: boolean;
  onToggle: (movieId: number) => void;
  size?: 'small' | 'large';
}

function WatchlistButton({ movie, isSaved, onToggle, size = 'small' }: WatchlistButtonProps) {
  const classes = ['watchlist-button', `watchlist-button--${size}`];
  if (isSaved) classes.push('watchlist-button--saved');

  return (
    <button
      type="button"
      className={classes.join(' ')}
      // The visible text is short ("Add to watchlist"), so the aria-label
      // also names the movie: a screen reader hears which film it is about
      aria-label={
        isSaved ? `Remove ${movie.title} from watchlist` : `Add ${movie.title} to watchlist`
      }
      onClick={() => onToggle(movie.id)}
    >
      {isSaved ? (
        <>
          <BookmarkIcon />
          Saved · Remove
        </>
      ) : (
        <>
          <span aria-hidden="true">+</span>
          Add to watchlist
        </>
      )}
    </button>
  );
}

export default WatchlistButton;
