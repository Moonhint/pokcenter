/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Button } from 'antd';

import headerImg from '../imgs/header.png';

const style = css`
    background: #f7f7f7;  
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 24px;
    height: 100vh;
    .header {
        width: 50%;
    }  
    .ant-btn-round.ant-btn-lg {
        height: 60px;
        font-weight: 600;
        margin: 42px 14px;
        box-shadow: 0 4px 0 rgb(0 0 0 / 3%);
        border-color: #81b6e2;
    }
    @media (max-width: 360px) {
        padding: 0;
    }
    @media (max-width: 420px) {
        .header {
            width: 100%;
        }  
    }
`

function HomeScreen() {
    return (
        <div css={style}>
            <img class="header" src={headerImg} alt=""/>
            <div class="cta">
                <a href="/my-pokemon">
                    <Button type="ghost" size="large" shape="round">My Pokemon</Button>
                </a>
                <a href="/pokemon">
                    <Button type="ghost" size="large" shape="round">Catch Now</Button>
                </a>
            </div>
        </div>
    );
}

export default HomeScreen;
