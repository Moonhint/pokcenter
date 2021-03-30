/** @jsxImportSource @emotion/react */
import { style } from './styles';
import pokeBallImg from './imgs/pokeball.png';

function BackRoute(backToList){
    if (backToList) {
        return (<a href="/pokemon">
            Find Wild Pokemon
        </a>)
    }else{
        return (<a href="/">
            <img class="poke-logo" src={pokeBallImg} alt=""/>
        </a>)
    }
}

function CustomNavbar({ backToList }) {
    return (
        <div css={style}>
            {BackRoute(backToList)}
            <a href="/my-pokemon">My Pokemon</a>
        </div>
    );
}

export default CustomNavbar;
