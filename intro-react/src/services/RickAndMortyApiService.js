import axios from 'axios';

const RickAndMortyApiService = async () => {
  return await axios.get('https://rickandmortyapi.com/api/character')
    .then((response) => {
      return response.data.results;
      })
    .catch((error) => {
        return error;
      }
    );
}

export { RickAndMortyApiService };
