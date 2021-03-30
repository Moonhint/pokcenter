/** @jsxImportSource @emotion/react */
import { style } from './styles';
import { Card } from 'antd';
import LocalStorageHelper from '../../helper/LocalStorageHelper';

const { Meta } = Card;

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
                <Meta title={pokemonData.name} description={`Owned (${countOwnPokemon(pokemonData.name)})`} />
            </Card>
        </a>
    );
}

export default PokemonListItem;