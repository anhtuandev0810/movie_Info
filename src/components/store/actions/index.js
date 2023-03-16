import axios from "axios";
import { GET_LATEST, GET_ORIGINALS, GET_TVSHOWS, GET_MYLIST, SET_MOVIE_DETAIL } from "../types";
const API_KEY = '6ac67d9135d161d796a82a3554d06fba';
const BASE_URL = 'https://api.themoviedb.org/3';


//Latest Movies:
export const getNetflixOriginals = () => async (dispatch) => {
    try {
        const result = await axios.get(
            `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_networks=213`
        );
        dispatch({type: GET_ORIGINALS, payload: result.data.results})
    } catch (error) {
        console.log("Can't get the ORIGINALS movies because of", error);
    }
}

//TV Shows
export const getTVShows = () => async (dispatch) => {
    try {
        const result = await axios.get(
            `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`
        );
        dispatch({type: GET_TVSHOWS, payload: result.data.results})
    } catch (error) {
        console.log("Can't get the TV SHOWS movies because of", error);
    }
}

//Latest Movies:
export const getLatest = () => async (dispatch) => {
    try {
        const result = await axios.get(
            `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
        );
        dispatch({type: GET_LATEST, payload: result.data.results})
    } catch (error) {
        console.log("Can't get the LATEST movies because of", error);
    }
}

//My List movies:
export const getMyList = () => async (dispatch) => {
    try {
        const result = await axios.get(
            `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`
        );
        dispatch({type: GET_MYLIST, payload: result.data.results})
    } catch (error) {
        console.log("Can't get the MY LIST movies because of", error);
    }
}

export const setMovieDetail = (movie) => dispatch => {
    dispatch({type: SET_MOVIE_DETAIL, payload: movie});
}