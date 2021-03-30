import { css } from '@emotion/react';

export const style = css`
    background: #f7f7f7;  
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 24px;
    height: 100vh;
    .header {
        width: 640px;
        height: 340px;
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
            width: 320px;
            height: 170px;
        }  
    }
`
