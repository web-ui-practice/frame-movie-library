import { useState } from 'react';
import { movies } from '../data/movies';
import MovieCard from '../components/MovieCard/MovieCard';
import MovieModal from '../components/MovieModal/MovieModal';
import type { Movie } from '../types';
import { TEXTS } from '../constants/texts';
import './WatchlistView.css';

interface WatchlistViewProps {
  watchlistIds: number[];
  isInWatchlist: (movieId: number) => boolean;
  onToggleWatchlist: (movieId: number) => void;
  onBrowse: () => void;
}

function WatchlistView({
  watchlistIds,
  isInWatchlist,
  onToggleWatchlist,
  onBrowse,
}: WatchlistViewProps) {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  // Turn saved ids into movie objects (ids that no longer exist are skipped)
  const savedMovies = watchlistIds
    .map((id) => movies.find((movie) => movie.id === id))
    .filter((movie): movie is Movie => movie !== undefined);

  return (
    <main className="watchlist">
      <div className="watchlist__heading">
        <h1 className="watchlist__title">{TEXTS.watchlist.title}</h1>
        <p className="watchlist__description">{TEXTS.watchlist.subtitle}</p>
      </div>

      <section className="watchlist__collection">
        <p className="watchlist__summary">
          {savedMovies.length} {TEXTS.watchlist.summary}
        </p>

        {savedMovies.length === 0 ? (
          <div className="watchlist__empty">
            <p className="watchlist__empty-title">{TEXTS.watchlist.emptyTitle}</p>
            <p className="watchlist__empty-text">{TEXTS.watchlist.emptyText}</p>
            <button type="button" className="watchlist__empty-button" onClick={onBrowse}>
              {TEXTS.watchlist.emptyAction}
            </button>
          </div>
        ) : (
          <div className="movie-grid">
            {savedMovies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                isSaved
                onSelect={setSelectedMovie}
                onToggleWatchlist={onToggleWatchlist}
              />
            ))}
          </div>
        )}
      </section>

      {selectedMovie && (
        <MovieModal
          movie={selectedMovie}
          isSaved={isInWatchlist(selectedMovie.id)}
          onClose={() => setSelectedMovie(null)}
          onToggleWatchlist={onToggleWatchlist}
        />
      )}
    </main>
  );
}

export default WatchlistView;
