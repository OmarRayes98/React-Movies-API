import * as actions from "./ActionTypes";

export const reducer = (state ,action ) =>{
    switch(action.type){

        case actions.ADD_MOVIE_TO_WATCHILIST:
            return{
                ...state,
                watchlist:[action.payload , ...state.watchlist]
            };
        case actions.REMOVE_MOVIE_FROM_WATCHLIST:

            return{
                ...state,
                watchlist: state.watchlist.filter(
                        (movie) => movie.imdbID !== action.payload
                    )
                };

        case actions.MOVE_TO_WATCHLIST:

            return{
                ...state,
                watched: state.watched.filter(
                    (movie) => movie.imdbId !== action.payload
                ),

                watchlist: [action.payload, ...state.watchlist]

                };
        
        case actions.ADD_MOVIVE_TO_WATCHED:
            return{
                ...state,
                watchlist: state.watchlist.filter(
                        (movie) => movie.imdbID !== action.payload
                    ),
                watched:[action.payload , ...state.watched]
                
                    };

        case actions.REMOVE_MOVIE_FROM_WATCHED:
            return {
                ...state,
                watched: state.watched.filter(
                        (movie) => movie.imdbID !== action.payload
                    )
            };

        default:
            return state;

    }

}