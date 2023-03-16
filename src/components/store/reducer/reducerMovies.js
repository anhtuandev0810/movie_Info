import { GET_LATEST, GET_MYLIST, GET_ORIGINALS, GET_TVSHOWS, SET_MOVIE_DETAIL } from "../types";

const reducerMoviesInitialState = {
  NetflixOriginals: null,
  TVShows: null,
  latestMovies: null,
  myListMovies: null,
  movieDetail: null,
};

const reducerMovies = (state = reducerMoviesInitialState, { type, payload }) => {
  switch (type) {
  case GET_ORIGINALS:
    return {...state, NetflixOriginals: payload};
  case GET_TVSHOWS:
    return {...state, TVShows: payload};
  case GET_LATEST:
    return {...state, latestMovies: payload};
  case GET_MYLIST:
    return {...state, myListMovies: payload};
  case SET_MOVIE_DETAIL:
    return {...state, movieDetail: payload};
  default:
    return state
  }
};

export default reducerMovies;
