import axios from 'axios';

var instance = axios.create({
    baseURL: `https://imdb2.mars-server.net/api/`,
  })

export default instance;