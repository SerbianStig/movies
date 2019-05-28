import axios from 'axios';

var instance = axios.create({
    baseURL: `http://imdb2.mars-server.net/api/`,
  })

export default instance;