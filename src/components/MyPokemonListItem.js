/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Button, Popconfirm } from 'antd';
import LocalStorageHelper from '../helper/LocalStorageHelper';

const style = css`
    border: 1px solid black;
    width: 150px;
    margin: 4px;
    text-align: center;
    padding: 12px;
    h5 {
        font-weight: 600;
    }
    .name:first-letter {
        text-transform:capitalize;
    }
`

function releasePokemon({ pokemonData, removeMyPokemonFromList }){
    LocalStorageHelper.removeMyPokemonList(pokemonData, pokemonData.nickname);
    removeMyPokemonFromList(pokemonData, pokemonData.nickname);
}

function MyPokemonListItem({ pokemonData, removeMyPokemonFromList }) {
    return (
        <div css={style}>
            <img src={pokemonData.sprites.front_default} alt=""/>
            <h5>{pokemonData.nickname}</h5>
            <p className="name">{pokemonData.name}</p>
            <Popconfirm
                placement="topLeft"
                title={`Release ${pokemonData.nickname} the ${pokemonData.name}?`}
                onConfirm={releasePokemon.bind(this, { pokemonData, removeMyPokemonFromList})}
                okText="Yes"
                cancelText="No"
            >
                <Button type="danger" shape="round">Release</Button>
            </Popconfirm>
        </div>
    );
}

export default MyPokemonListItem;
