/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Card } from 'antd';
import LocalStorageHelper from '../helper/LocalStorageHelper';

const { Meta } = Card;

const style = css`
    width: 150px;
    margin: 4px;
    text-align: center;
    .ant-card-meta-title:first-letter {
        text-transform:capitalize;
    }
    .ant-card-meta-detail > div:not(:last-child) {
        margin-bottom: 0;
    }
`

function countOwnPokemon(pokemonName){
    const ownPokemon = LocalStorageHelper.getMyPokemonList() || {};
    return ownPokemon[pokemonName] ? ownPokemon[pokemonName].count : 0;
}

function PokemonListItem({ pokemonData }) {
    return (
        <a href={`/pokemon/${pokemonData.name}`}>
            <Card css={style}
                hoverable
                cover={<img alt="" src={pokemonData.image} />}
                extra={<a href="#">Sneak Peek</a>}>
                <Meta title={pokemonData.name} description={`Own (${countOwnPokemon(pokemonData.name)})`} />
            </Card>
        </a>
    );
}

export default PokemonListItem;
