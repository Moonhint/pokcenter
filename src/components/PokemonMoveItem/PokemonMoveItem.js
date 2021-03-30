/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const style = css`

`

const stylePokemonMoveCard= css`
    border: 1px solid black;
    padding: 12px;
    margin-top: 12px;

    .name {
        font-weight: 600;
    }
`

function PokemonMoveItem({ pokemonMoveUrl }) {
    const [onLoading, setOnLoading] = useState(true);
    const [pokemonMove, setPokemonMove] = useState (null);

    const getPokemonMove = async () => {
        try {
            const { data } = await axios.get(pokemonMoveUrl);
            setPokemonMove(data); 
            setOnLoading(false);
        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() => {
        getPokemonMove();
    }, []);

    let PokemonMoveCard;
    if (onLoading) {
        PokemonMoveCard = 'On Loading..';
    } else {
        PokemonMoveCard = 

        <div css={stylePokemonMoveCard}>
            <span className="name">{pokemonMove.name}</span>
            <p>{pokemonMove.effect_entries[0].effect}</p>
        </div>;
    }

    return (
        <div css={style}>
            {PokemonMoveCard}
        </div>
    );
}

export default PokemonMoveItem;
