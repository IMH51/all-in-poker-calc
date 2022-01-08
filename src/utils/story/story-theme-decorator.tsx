/** @jsxImportSource theme-ui */

import type { StoryFn } from '@storybook/react';

import { ThemeProvider } from '@theme-ui/core';
import { BaseStyles } from 'theme-ui';
import { theme } from '../../theme-ui';

export const storyThemeDecorator = (Story: StoryFn) => (
    <ThemeProvider theme={theme}>
        <BaseStyles>
            <Story />
        </BaseStyles>
    </ThemeProvider>
);