import axios from 'axios';

const movieBaseUrl="https://api.themoviedb.org/3"
const api_key='7ca0d308a64495e5d4ab5e59dd186f09'

const movieByGenreBaseURL="https://api.themoviedb.org/3/discover/movie?api_key=7ca0d308a64495e5d4ab5e59dd186f09";

//https://api.themoviedb.org/3/movie/550?api_key=7ca0d308a64495e5d4ab5e59dd186f09
const getTrendingVideo=axios.get(movieBaseUrl+"/trending/all/day?api_key="+api_key);
const getMovieByGenreId=(id)=>
    axios.get(movieByGenreBaseURL+"&with_genres="+id)

export default{
    getTrendingVideo,
    getMovieByGenreId
}