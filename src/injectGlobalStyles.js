import { injectGlobal } from 'styled-components';

export default () => injectGlobal`
    html {
        height: 100%;
    }

    body {
        font-family: 'Roboto', sans-serif;
        padding: 0;
        margin: 0;
        height: 100%;
        min-width: 320px;
    }
`;
