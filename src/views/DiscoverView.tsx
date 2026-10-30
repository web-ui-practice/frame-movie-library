import { movies } from '../data/movies';
import MovieCard from '../components/MovieCard/MovieCard';
import './DiscoverView.css';
import { useState } from 'react';
import searchIcon from '../assets/search.svg';

const genres = [...new Set(movies.map((movie) => movie.genre))];

function DiscoverView () {
const [search, setSearch] = useState<string>('');
const [genre, setGenre] = useState<string>('all');

const filteredMovies = movies.filter((movie) => {
    
  const matchesSearch = movie.title
    .toLowerCase()
    .includes(search.trim().toLowerCase());
  const matchesGenre = genre === 'all' || movie.genre === genre;

  return matchesSearch && matchesGenre;
});

const isFiltering = search.trim() !== '' || genre !== 'all';

    return (
        <main className="discover">
         <div className='discover__heading'>
          <h1 className='discover__title'>Discover</h1>
          <p className='discover__description'>Find a story worth your evening.</p>
         </div>

         <div className='discover__filters'>
            {/*Search */}
            <div className='discover__search'>
                <label className="discover__label" htmlFor="movie-search">Search films</label>
                <div className='discover__field'>
                 <img src={searchIcon} alt="" className="discover__field-icon" />
                 <input 
                  id='movie-search'
                  className="discover__input"
                  type="search"
                  placeholder='Search by title...'
                  value={search}
                  onChange={(letter) => setSearch(letter.target.value)}
                  />
                </div>
            </div>
            {/*Genre */}
            <div className="discover__genre">
                <label htmlFor="genre-filter" className="discover__label">Genre</label>
                <select
                 id="genre-filter"
                 className="discover__select"
                 value={genre}
                 onChange={(information) => setGenre(information.target.value)}
                >
                    <option value="all">All genres</option>
                    {genres.map((genreName) => (
                     <option key={genreName} value={genreName}>{genreName}</option>
                     ))}
                  </select>
            </div>
         </div>

         <section className='discover__collection'>
          <p className="discover__summary">{isFiltering ? `${filteredMovies.length} films found` : `${movies.length} films to discover`}</p>
          {filteredMovies.length === 0 ? (
            <div className="discover__empty" role="status">
              <p className="discover__empty-title">No films found</p>
              <p className="discover__empty-text">Try a different title.</p>
            </div>
          ) : (
            <div className="movie-grid">
             {filteredMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
             ))}
            </div>
          )}
         </section>
        </main>
    );
} 

export default DiscoverView;