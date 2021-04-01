/** @jsxImportSource @emotion/react */
import { style } from './styles';
import { useState, useEffect } from 'react';
import { Button } from 'antd';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import locale from './locale';
import LocalStorageHelper from '../../helper/LocalStorageHelper';
import CustomNavbar from '../../components/CustomNavbar';
import MyPokemonListItem from '../../components/MyPokemonListItem';
import sadFaceImg from './imgs/psyduck.png';

function MyPokemonList() {
    const [pokemons, setPokemons] = useState([]);

    function getMyPokemons() {
        const myPokemonList = LocalStorageHelper.getMyPokemonList() || {};
        const myPokemonKeys = Object.keys(myPokemonList);
        const aggrPokemons = [];
        for (let index = 0; index < myPokemonKeys.length; index++) {
            const key = myPokemonKeys[index];
            aggrPokemons.push(...myPokemonList[key].pokemons);
        }
        setPokemons(aggrPokemons);
    }

    function removeMyPokemonFromList(pokemon, nickname){
        const index = pokemons.findIndex(n => (n.nickname === nickname && n.name === pokemon.name));
        if (index !== -1){
            let currentPokemon = pokemons;
            currentPokemon.splice(index, 1);
            setPokemons([...currentPokemon]);
        }
    }

    useEffect(() => {
        getMyPokemons();
    }, []);

    let MyPokemonList;
    if (pokemons.length > 0){
        MyPokemonList = <div className="container-pokemon">
            {
                pokemons.map((pokemon, index) =>
                    <MyPokemonListItem key={index} pokemonData={pokemon} removeMyPokemonFromList={removeMyPokemonFromList}/>
                )
            }
        </div>
    }else{
        MyPokemonList = <div>
            <LazyLoadImage className="img-sad-face" src={sadFaceImg} alt="" />
            <p>{locale.TXT_NO_POKEMON}</p>
            <a href="/pokemon">
                <Button type="primary" size="large" shape="round">Let's Catch Em</Button>
            </a>
        </div>
    }

    return (
        <div css={style}>
            <CustomNavbar backToList/>
            <h4>{locale.HEADER_MY_POKEMON}</h4>
            {MyPokemonList}
        </div>
    );
}

export default MyPokemonList;
