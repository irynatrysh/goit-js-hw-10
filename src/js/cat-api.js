import axios from "axios";

axios.defaults.headers.common["x-api-key"] =
    "live_j4fUgEqkWw8kgwFKev1qg5ycFnQaHFi8PMC6pXPCnXywg3hHpKV6qZweARCxoAaT";


const fetchBreeds = () => 
  axios
    .get('https://api.thecatapi.com/v1/breeds')
    .then(response => response.data)
    .catch(error => console.error(error.status));

const fetchCatByBreed = (breedId) => 
  axios
    .get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
    .then(resp => resp.data)
    .catch(error => console.error(error.status));


export { fetchBreeds, fetchCatByBreed };