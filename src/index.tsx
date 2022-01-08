/** @jsxImportSource theme-ui */
import { render } from 'react-dom';
import { ThemeProvider } from '@theme-ui/core';
import { theme } from './theme-ui';

import { App } from './components/App';

const appRoot = document.getElementById('root');

render(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>,
    appRoot,
);
