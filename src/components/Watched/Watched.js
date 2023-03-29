import React from 'react';
import "../Watchlist/Watchlist.css";
import { useMovieContext } from '../context/GlobalContext';
import MovieCard from '../MovieCard/MovieCard';


const Watched = () => {

  const MovieContext = useMovieContext();

  return (
    <div className='watch-list'>
      <div className='container'>
      <div className='main-heading'>
          <h1>My Watched</h1>
          <span className='movies-count'>
            {MovieContext.watched.length}
            {MovieContext.watched.length === 1 ? " Movie" :" Movies"}
          </span>
        </div>

        {MovieContext.watched.length > 0 ? (<div className='movie-grid'>
        {MovieContext.watched.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} type="watched" />
        ))}
        </div>)
        :<h2 className='no-movies'>No Movies in your list, add some!</h2>}


      </div>
    </div>
  )
}

export default Watched
