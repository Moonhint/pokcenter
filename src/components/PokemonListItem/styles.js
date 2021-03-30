import { css } from '@emotion/react';

export const style = css`
    width: 150px;
    margin: 4px;
    text-align: center;
    .ant-card-meta-title:first-letter {
        text-transform:capitalize;
    }
    .ant-card-meta-detail > div:not(:last-child) {
        margin-bottom: 0;
    }
`
