import { movies } from '../data/movies';
import MovieCard from '../components/MovieCard/MovieCard';
import './DiscoverView.css';
import { useState } from 'react';
import searchIcon from '../assets/search.svg';

function DiscoverView () {
const [search, setSearch] = useState<string>('')

const filteredMovies = movies.filter((movie) => movie.title.toLowerCase().includes(search.toLowerCase()));

    return (
        <main className="discover">
         <div className='discover__heading'>
          <h1 className='discover__title'>Discover</h1>
          <p className='discover__description'>Find a story worth your evening.</p>
         </div>
         <div className='discover__filters'>
            <div className='discover__search'>
                <label className="discover__label" htmlFor="movie-search">Search Films</label>
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
         </div>
         <section className='discover__collection'>
          <p className="discover__summary">{search !== '' ? `${filteredMovies.length} films found` : `${movies.length} films to discover`}</p>
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