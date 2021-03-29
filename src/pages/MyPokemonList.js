/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState, useEffect } from 'react';
import { Button } from 'antd';
import LocalStorageHelper from '../helper/LocalStorageHelper';
import CustomNavbar from '../components/CustomNavbar';
import MyPokemonListItem from '../components/MyPokemonListItem';

import sadFaceImg from '../imgs/psyduck.png';

const style = css`
    text-align: center;
    height: 100vh;
    h4 {
        color: #120f7d;
        font-size: 24px;
        font-weight: 600;
        text-align: center;
        margin-top: 32px;
        font-family: monospace;
        text-decoration: underline;
    }
    .img-sad-face {
        padding-top: 0;
        padding-bottom: 0;
        width: 20%;
    }
    .container-pokemon {
        padding: 24px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    @media (max-width: 420px) {
        .img-sad-face {
            width: 80%;
        }  
    }
`

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
            <img className="img-sad-face" src={sadFaceImg} alt=""/>
            <p>You have no pokemon..</p>
            <a href="/pokemon">
                <Button type="primary" size="large" shape="round">Let's Catch Em</Button>
            </a>
        </div>
    }

    return (
        <div css={style}>
            <CustomNavbar backToList/>
            <h4>My Pokemon</h4>
            {MyPokemonList}
        </div>
    );
}

export default MyPokemonList;
