/** @jsxImportSource theme-ui */

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Card } from '.';

export default {
    title: 'Card',
    component: Card,
    args: {
        code: 'As',
    },
} as ComponentMeta<typeof Card>;

export const Default: ComponentStory<typeof Card> = (args) => <Card {...args} />;
