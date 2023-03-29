import React, { memo } from 'react';
import { useMovieContext } from '../../context/GlobalContext';
import "./ResultCard.css";
import * as actions from "../../context/ActionTypes";

const ResultCard = ({movies}) => {



  const MovieContext = useMovieContext();

  return (


    
    (
      movies.map((movie)=>{

        const storedMovieList = MovieContext.watchlist.find(
          (movieItem) => movieItem.imdbID === movie.imdbID
          );
        
          const storedMovieWatched = MovieContext.watched.find(
            (movieItem) => movieItem.imdbID === movie.imdbID
            );
        
          const watchListDisabled = storedMovieList ? true :storedMovieWatched ?  true  : false ;
          const  watchedDisabled = storedMovieWatched ?true : false;
        
        return(
          <li key={movie.imdbID}>
          <div className='result-card'>

        <div className='poster-wrapper'>
            {movie.Poster ? <img src={movie.Poster} alt={movie.Title}/>
            : (<div className='filter-poster'></div>
            )}
        </div>

        <div className='info'>
            <div className='heading'>
                <h3 className='title'>{movie.Title}</h3>
                {movie.Year ? <h4 className='release-date'>{movie.Year}</h4>:"-"}
            </div>

          <div className='controls'>
          <button disabled={watchListDisabled} onClick={()=> MovieContext.MoviesDispatch(
            {type : actions.ADD_MOVIE_TO_WATCHILIST , payload : movie }

          )} className='btn' >Add to Watchlist</button>

          <button disabled={watchedDisabled} onClick={()=>MovieContext.MoviesDispatch(
            {type : actions.ADD_MOVIVE_TO_WATCHED , payload : movie }

          )} className='btn' >Add to Watched</button> 
        </div>
        </div>

          </div>
          </li>

        )
      })
    )
    
    
  )
}

export default memo(ResultCard);
