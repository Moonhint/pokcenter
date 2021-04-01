/** @jsxImportSource @emotion/react */
import { style } from './styles';
import locale from './locale';
import pokeBallImg from './imgs/pokeball.png';

function BackRoute(backToList){
    if (backToList) {
        return (<a href="/pokemon" data-test="link-to-pokemon-list">
            {locale.TO_POKEMON_LIST}
        </a>)
    }else{
        return (<a href="/" data-test="link-to-home">
            <img className="poke-logo" src={pokeBallImg} alt=""/>
        </a>)
    }
}

function CustomNavbar({ backToList }) {
    return (
        <div css={style}>
            {BackRoute(backToList)}
            <a href="/my-pokemon" data-test="link-to-my-pokemon">
                {locale.TO_MY_POKEMON}
            </a>
        </div>
    );
}

export default CustomNavbar;
