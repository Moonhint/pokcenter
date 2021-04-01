/** @jsxImportSource @emotion/react */
import { style } from './styles';
import { Button } from 'antd';
import PokemonListItem from '../PokemonListItem';
import locale from './locale';

function Pokemons({ entries, onLoadMore }) {
    return (
        <div css={style}>
            <h4>{locale.HEADER_LIST}</h4>
            <div className="container-pokemon">
                {        
                    entries.map((pokemon, index) =>
                        <PokemonListItem key={index} pokemonData={pokemon}/>
                    )
                }
            </div>
            <div className="cta">
                <Button onClick={onLoadMore} type="primary" shape="round" size="large">
                    {locale.BTN_LOAD_MORE}
                </Button>
            </div>
        </div>
    );
}

export default Pokemons;
