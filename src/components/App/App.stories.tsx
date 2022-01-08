/** @jsxImportSource theme-ui */

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { App } from '.';

export default {
    title: 'App',
    component: App,
} as ComponentMeta<typeof App>;

export const Default: ComponentStory<typeof App> = () => <App />;
