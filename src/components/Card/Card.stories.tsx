import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Card } from '.';
import { cardData, CardObject } from '../../fixtures';

const cardArgsObject = cardData.reduce(
    (cardObject, card) => ({
        ...cardObject,
        [card.name]: card,
    }),
    {},
);

export default {
    title: 'Card',
    component: Card,
    args: {
        card: cardData[0],
        onClickHandler: (card: CardObject) => console.log(`${card.name} clicked!`),
    },
    argTypes: {
        card: {
            options: Object.keys(cardArgsObject),
            mapping: cardArgsObject,
            control: {
                type: 'select',
            },
        },
    },
} as ComponentMeta<typeof Card>;

export const Default: ComponentStory<typeof Card> = (args) => <Card {...args} />;
