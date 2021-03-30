/** @jsxImportSource @emotion/react */
import { style } from './styles';
import { Button } from 'antd';
import PokemonListItem from '../PokemonListItem';

function Pokemons({ entries, onLoadMore }) {
    return (
        <div css={style}>
            <h4>List Pokemon</h4>
            <div class="container-pokemon">
                {        
                    entries.map((pokemon, index) =>
                        <PokemonListItem key={index} pokemonData={pokemon}/>
                    )
                }
            </div>
            <div class="cta">
                <Button onClick={onLoadMore} type="primary" shape="round" size="large">
                    Load More
                </Button>
            </div>
        </div>
    );
}

export default Pokemons;
