import { css } from '@emotion/react';

export const style = css`
    .pokemon-detail {
        padding: 24px;
    }
    .pokemon-detail h5 {
        font-weight: 600;
        font-size: 24px;
    }
    .pokemon-detail h5:first-letter {
        text-transform:capitalize;
    }
    .pokemon-detail .container-img {
        text-align: center;
    }
    .cta {
        text-align: center;
        margin: 12px 0;
    }

    @media (max-width: 320px) {
        .pokemon-detail .container-img img {
            width: 130px;
            height: 130px;
        }
    }
`

export const styleModal = css`
    text-align: center; 
    img {
        margin-bottom: 24px;
    }   
`

export const styleSpinner = css`
    display: flex;
    justify-content: center;
    margin-top: 42px;
`
