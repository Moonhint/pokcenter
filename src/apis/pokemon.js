import axios from 'axios';

const pokemonPath = 'https://pokeapi.co/api/v2/pokemon';

const PokemonApi = {
    show: (name) => {
        return axios.get(`${pokemonPath}/${name}`);
    }
}

export default PokemonApi;