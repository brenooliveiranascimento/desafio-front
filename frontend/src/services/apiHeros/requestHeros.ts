import axios from 'axios';

const herosApi = axios.create({
  baseURL: 'https://www.superheroapi.com/api.php/147036851381623/1/',
});

export default herosApi;
