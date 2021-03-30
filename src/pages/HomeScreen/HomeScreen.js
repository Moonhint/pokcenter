// /** @jsxImportSource @emotion/react */
import { Button } from 'antd';
import { style } from './styles';
import locale from './locale';
import headerImg from './imgs/header.png';

function HomeScreen() {
    return (
        <div css={style}>
            <img className="header" src={headerImg} alt="" data-test="img-header"/>
            <div className="cta">
                <a href="/my-pokemon" data-test="link-my-pokemon">
                    <Button type="ghost" size="large" shape="round">{locale.BTN_MY_POKEMON}</Button>
                </a>
                <a href="/pokemon" data-test="link-pokemon-list">
                    <Button type="ghost" size="large" shape="round">{locale.BTN_POKEMON_LIST}</Button>
                </a>
            </div>
        </div>
    );
}

export default HomeScreen;
