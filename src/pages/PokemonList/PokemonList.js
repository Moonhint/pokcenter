/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Spin } from 'antd';
import { gql, useQuery } from '@apollo/client';
import Pokemons from '../../components/Pokemons';
import CustomNavbar from '../../components/CustomNavbar';

const styleSpinner = css`
    display: flex;
    justify-content: center;
    margin-top: 42px;
`

function PokemonList() {

    const GET_POKEMONS = gql`
        query pokemons($limit: Int, $offset: Int) {
        pokemons(limit: $limit, offset: $offset) {
            count
            next
            previous
            status
            message
            results {
                url
                name
                image
            }
        }
        }
    `;
    
    const gqlVariables = {
        limit: 10,
        offset: 0,
    };

    function PokemonData () {
        const { loading, error, data, fetchMore } = useQuery(GET_POKEMONS, {
            variables: gqlVariables,
        });
    
        if (loading) return <Spin css={styleSpinner}/>;
        if (error) return `Error! ${error.message}`;

        const pokemons = data.pokemons;
        return (
            <Pokemons
              entries={pokemons.results || []}
              onLoadMore={() => {
                if (pokemons.next) {
                  let offset = parseInt(pokemons.next.split('?')[1].split('&')[0].split('=')[1], 10);
                  fetchMore({
                    variables: { offset },
                  });
                }
              }}
            />
        );
    };
     
    return (
        <div>
            <CustomNavbar/>
            {PokemonData()}
        </div>
    );
}

export default PokemonList;
