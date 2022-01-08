/** @jsxImportSource theme-ui */
import type { ReactElement } from 'react';

import { render } from '@testing-library/react';
import { theme } from '../../theme-ui';
import { ThemeProvider } from '@theme-ui/core';

export const renderWithThemeProvider = (component: ReactElement) =>
    render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
