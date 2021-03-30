/** @jsxImportSource @emotion/react */
import { style, stylePokemonMoveCard } from './styles';
import { useState, useEffect } from 'react';
import axios from 'axios';

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
