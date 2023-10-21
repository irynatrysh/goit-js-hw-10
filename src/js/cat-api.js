import axios from "axios";

axios.defaults.headers.common["x-api-key"] =
    "live_j4fUgEqkWw8kgwFKev1qg5ycFnQaHFi8PMC6pXPCnXywg3hHpKV6qZweARCxoAaT";

axios.defaults.baseURL = 'https://api.thecatapi.com/v1';

const fetchBreeds = () => 
  axios
    .get('/breeds')
    .then(response => response.data)
  

const fetchCatByBreed = (breedId) => 
  axios
    .get(`/images/search?breed_ids=${breedId}`)
    .then(resp => resp.data)
    .catch(error => console.error(error.status));


export { fetchBreeds, fetchCatByBreed };