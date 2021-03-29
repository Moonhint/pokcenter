/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Button } from 'antd';
import PokemonListItem from './PokemonListItem';

const style = css`
    .container-pokemon {
        padding: 24px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    .cta {
        display: flex;
        justify-content: center;
        padding: 42px 32px;
    }
`

function Pokemons({ entries, onLoadMore }) {
    return (
        <div css={style}>
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
