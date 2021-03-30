import { css } from '@emotion/react';

export const style = css`
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

    a {
        font-weight: 600;
        font-size: 15px;
    }
`
