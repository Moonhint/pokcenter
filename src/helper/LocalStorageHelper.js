const MY_POKEMON_KEY = 'my-pokemon';

const LocalStorageHelper = {
    getMyPokemonList: () => {
        return JSON.parse(localStorage.getItem(MY_POKEMON_KEY));
    },
    saveMyPokemonList: (pokemon, nickname) => {
        let myPokemons = JSON.parse(localStorage.getItem(MY_POKEMON_KEY)) || {};
        let currentRecord = myPokemons[pokemon.name] ? myPokemons : { [pokemon.name]: {count: 0, pokemons: []}, ...myPokemons };
        currentRecord[pokemon.name].count += 1;
        currentRecord[pokemon.name].pokemons.push({...pokemon, ...{ nickname }});
        return localStorage.setItem(MY_POKEMON_KEY, JSON.stringify(currentRecord));
    },
    removeMyPokemonList: (pokemon, nickname) => {
        let myPokemons = JSON.parse(localStorage.getItem(MY_POKEMON_KEY));
        if (!myPokemons[pokemon.name]) return;
        if (myPokemons[pokemon.name].count <= 1) {
            delete myPokemons[pokemon.name];
        }else{
            myPokemons[pokemon.name].count -= 1;
            let indexCurrentNickname = myPokemons[pokemon.name].pokemons.findIndex(n => n.nickname === nickname);
            myPokemons[pokemon.name].pokemons.splice(indexCurrentNickname, 1);
        }
        return localStorage.setItem(MY_POKEMON_KEY, JSON.stringify(myPokemons));
    }
}

export default LocalStorageHelper;
