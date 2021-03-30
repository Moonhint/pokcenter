/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Button } from 'antd';
import PokemonListItem from '../PokemonListItem';

const style = css`
    font-family: monospace;
    h4 {
        color: #6d581e;
        font-size: 24px;
        font-weight: 600;
        text-align: center;
        margin-top: 32px;
        font-family: monospace;
        text-decoration: underline;
    }
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
