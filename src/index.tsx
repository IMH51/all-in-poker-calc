/** @jsxImportSource theme-ui */
import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from '@theme-ui/core';
import { theme } from './theme-ui';

const appRoot = document.getElementById('root');

render(
    <ThemeProvider theme={theme}>
        <div sx={{ color: 'text', background: 'background' }}>Root Element</div>
    </ThemeProvider>,
    appRoot,
);
