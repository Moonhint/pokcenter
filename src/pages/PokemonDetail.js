/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState, useEffect } from 'react';
import { Button, Modal, Input } from 'antd';
import PokemonApi from '../apis/pokemon';
import CustomNavbar from '../components/CustomNavbar';
import PokemonMoveItem from '../components/PokemonMoveItem';
import LocalStorageHelper from '../helper/LocalStorageHelper';

const style = css`
    .pokemon-detail {
        padding: 24px;
    }
    .pokemon-detail h5 {
        font-weight: 600;
        font-size: 24px;
    }
    .pokemon-detail h5:first-letter {
        text-transform:capitalize;
    }
    .pokemon-detail .container-img {
        text-align: center;
    }
    .pokemon-detail .container-img img{
        width: 15%;
    }
    .cta {
        text-align: center;
        margin: 12px 0;
    }
    @media (max-width: 420px) {
        .pokemon-detail .container-img img {
            width: 50%;
        }
    }
`

function PokemonDetail({ name }) {
    const [onLoading, setOnLoading] = useState(true);
    const [pokemon, setPokemon] = useState(null);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isSuccessCatch, setIsSuccessCatch] = useState(false);
    const [nickname, setNickname] = useState('');

    const getPokemonDetail = async () => {
        setOnLoading(true);
        try {
            const { data } = await PokemonApi.show(name);
            setPokemon(data); 
            setOnLoading(false);
        } catch (err) {
            console.error(err.message);
        } 
    }

    const showModal = () => {
        setIsModalVisible(false);
        setIsSuccessCatch(false);
        setNickname('');
        setIsModalVisible(true);
    };

    const handleOk = () => {
        if (isSuccessCatch){
            LocalStorageHelper.saveMyPokemonList(pokemon, nickname);
        }
        setIsModalVisible(false);
        setIsSuccessCatch(false);
        setNickname('');
    };

    const catchPokemon = () => {
        showModal();
        if (Math.random() > 0.5){
            setIsSuccessCatch(true);
        }else{
            setIsSuccessCatch(false);
        }
    }

    useEffect(() => {
        getPokemonDetail();
    }, []);

    let PokemonDetail;
    if (onLoading) {
        PokemonDetail = 'On Loading..';
    } else {
        PokemonDetail = <div className="pokemon-detail">
            <h5>{pokemon.name}</h5>
            <div className="container-type">
                <span>type: {pokemon.types.map(type => type.type.name).join(', ')}</span>
            </div>
            <div className="container-img">
                <img src={pokemon.sprites.front_default} alt=""/>
                <img src={pokemon.sprites.back_default} alt=""/>
            </div>
            <div className="cta">
                <Button onClick={catchPokemon} type="primary" size="large" shape="round">Catch</Button>
            </div>
            <div className="container-move">
                <span><b>Moves:</b></span>
                {pokemon.moves.map((move, index) => {
                    return <PokemonMoveItem key={index} pokemonMoveUrl={move.move.url}/>
                })}
            </div>
        </div>
    }

    function onNicknameChanged(nickname){
        setNickname(nickname.target.value);
    }

    let catchModalTitle;
    let CatchModalContent;
    if (isSuccessCatch){
        catchModalTitle = 'Success';
        CatchModalContent = <div className="modal-content-success">
            <Input placeholder="Named your pokemon" onChange={onNicknameChanged} />
        </div>
    }else{
        catchModalTitle = 'Failed';
        CatchModalContent = <div className="modal-content-failed">
            Failed
        </div>
    }

    return (
        <div css={style}>
            <CustomNavbar backToList/>
            {PokemonDetail}
            <Modal 
                title={catchModalTitle}
                visible={isModalVisible} 
                closable={false} 
                footer={[
                    <Button key="submit" type="primary" onClick={handleOk}>
                      Ok
                    </Button>
                ]}
                >
                {CatchModalContent}
            </Modal>
        </div>
    );
}

export default PokemonDetail;