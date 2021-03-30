/** @jsxImportSource @emotion/react */
import { style } from './styles';
import { Button, Popconfirm, Card } from 'antd';
import LocalStorageHelper from '../../helper/LocalStorageHelper';

const { Meta } = Card;

function releasePokemon({ pokemonData, removeMyPokemonFromList }){
    LocalStorageHelper.removeMyPokemonList(pokemonData, pokemonData.nickname);
    removeMyPokemonFromList(pokemonData, pokemonData.nickname);
}

function MyPokemonListItem({ pokemonData, removeMyPokemonFromList }) {
    return (
        <Card css={style}
            hoverable
            cover={<img width="150px" height="150px" alt="" src={pokemonData.sprites.front_default} />}
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
