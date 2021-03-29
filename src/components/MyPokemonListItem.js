/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Button, Popconfirm, Card } from 'antd';
import LocalStorageHelper from '../helper/LocalStorageHelper';

const { Meta } = Card;

const style = css`
    font-family: monospace;
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

function releasePokemon({ pokemonData, removeMyPokemonFromList }){
    LocalStorageHelper.removeMyPokemonList(pokemonData, pokemonData.nickname);
    removeMyPokemonFromList(pokemonData, pokemonData.nickname);
}

function MyPokemonListItem({ pokemonData, removeMyPokemonFromList }) {
    return (
        <Card css={style}
            hoverable
            cover={<img alt="" src={pokemonData.sprites.front_default} />}
            extra={<Popconfirm
                placement="topLeft"
                title={`Release ${pokemonData.nickname} the ${pokemonData.name}?`}
                onConfirm={releasePokemon.bind(this, { pokemonData, removeMyPokemonFromList})}
                okText="Yes"
                cancelText="No"
                >
                <Button type="danger" size="small" shape="round">Release</Button>
            </Popconfirm>}>
            <Meta title={pokemonData.nickname} description={pokemonData.name} />
        </Card>
    );
}

export default MyPokemonListItem;
