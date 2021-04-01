// /** @jsxImportSource @emotion/react */
import { Button } from 'antd';
import { style } from './styles';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import locale from './locale';

function HomeScreen() {
    const headerImg = 'https://storage.googleapis.com/file-dbucket/pokcenter/header.png';

    return (
        <div css={style}>
            <LazyLoadImage className="header" src={headerImg} alt="" data-test="img-header" />
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
