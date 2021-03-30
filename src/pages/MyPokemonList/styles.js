import { css } from '@emotion/react';

export const style = css`
    text-align: center;
    height: 100vh;
    h4 {
        color: #120f7d;
        font-size: 24px;
        font-weight: 600;
        text-align: center;
        margin-top: 32px;
        font-family: monospace;
        text-decoration: underline;
    }
    .img-sad-face {
        padding-top: 0;
        padding-bottom: 0;
        width: 20%;
    }
    .container-pokemon {
        padding: 24px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    @media (max-width: 420px) {
        .img-sad-face {
            width: 80%;
        }  
    }
`
