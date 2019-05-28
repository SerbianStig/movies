import axios from './config.js'

export default {
    getMovies(){
        return axios.get('movies');
    },
    getMovie(id){
        return axios.get('movies/'+ id);
    },
}