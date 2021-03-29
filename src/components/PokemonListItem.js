/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Button, Popconfirm } from 'antd';
import LocalStorageHelper from '../helper/LocalStorageHelper';

const style = css`
    border: 1px solid black;
    width: 150px;
    margin: 4px;
    text-align: center;
    padding: 4px;
    h5:first-letter {
        text-transform:capitalize;
    }
`

function countOwnPokemon(pokemonName){
    const ownPokemon = LocalStorageHelper.getMyPokemonList() || {};
    return ownPokemon[pokemonName] ? ownPokemon[pokemonName].count : 0;
}

function PokemonListItem({ pokemonData }) {
    return (
        <div css={style}>
            <a href={`/pokemon/${pokemonData.name}`}>
                <img src={pokemonData.image} alt=""/>
                <h5>{pokemonData.name}</h5>
                <p>Own ({countOwnPokemon(pokemonData.name)})</p>
                <Button type="link" shape="round">Take a look</Button>
            </a>
        </div>
    );
}

export default PokemonListItem;
