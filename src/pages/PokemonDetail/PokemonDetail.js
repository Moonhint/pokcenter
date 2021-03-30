/** @jsxImportSource @emotion/react */
import { style, styleModal, styleSpinner } from './styles';
import { useState, useEffect } from 'react';
import { Button, Modal, Input, message, Spin } from 'antd';
import PokemonApi from '../../apis/pokemon';
import CustomNavbar from '../../components/CustomNavbar';
import PokemonMoveItem from '../../components/PokemonMoveItem';
import LocalStorageHelper from '../../helper/LocalStorageHelper';
import pokeImg from './imgs/wiggle.gif';

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
            if (nickname === ''){
                return message.error('give a name to the pokemon', 1.5);
            }
            if (!LocalStorageHelper.checkIfAbleToSave(nickname)){
                message.error('already have pokemon with that nick', 1.5);
            }else{
                LocalStorageHelper.saveMyPokemonList(pokemon, nickname);
                message.success(`${nickname} the ${pokemon.name} successfully added to my collection`, 1.5);
                setIsModalVisible(false);
                setNickname('');
            }
        }else{
            setIsSuccessCatch(false);
            setIsModalVisible(false);
            setNickname('');
        }
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
        PokemonDetail = <Spin css={styleSpinner}/>;;
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
        if (pokemon){
            catchModalTitle = `Successfully catch ${pokemon.name}`;
            CatchModalContent = <div css={styleModal}>
                <img src={pokeImg} alt=""/>
                <Input placeholder={`Named your ${pokemon.name}`} onChange={onNicknameChanged} />
            </div>
        }
    }else{
        if (pokemon){
            catchModalTitle = `Unable to catch ${pokemon.name}`;
        }
        CatchModalContent = <div className="modal-content-failed">
            Pokemon run away, try again!
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
