/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import pokeBallImg from '../imgs/pokeball.png';

const style = css`
    background: #f7f7f7;
    display: flex;
    justify-content: space-between;
    padding: 18px;
    box-shadow: 0 4px 0 rgb(0 0 0 / 3%);
    border-color: #81b6e2;
    box-shadow: 0 2px 2px rgb(0 0 0 / 4%);
    border-bottom: #cecece 1px solid;
    position: sticky;
    top: 0;
    z-index: 999;

    .poke-logo {
        width: 26px;
        height: 26px;
    }
`

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
