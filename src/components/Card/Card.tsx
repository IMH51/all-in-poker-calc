/** @jsxImportSource theme-ui */
import { FunctionComponent, MouseEventHandler } from 'react';
import { Themed } from 'theme-ui';
import { useDrag } from 'react-dnd';

import { cardCodes, CardObject } from '../../fixtures';

export const Card: FunctionComponent<CardProps> = ({ card, onClick, selected }) => {
    const [, ref] = useDrag({
        type: 'CARD',
        item: card,
    });

    const { code } = card;

    return cardCodes.includes(code) ? (
        <Themed.img
            sx={
                selected
                    ? { border: '3px solid yellow', borderRadius: '4px' }
                    : { border: '3px solid transparent', borderRadius: '4px' }
            }
            ref={ref}
            src={getCard(code)}
            onClick={onClick}
        />
    ) : null;
};

type CardProps = {
    card: CardObject;
    onClick?: MouseEventHandler;
    selected?: boolean;
};

const getCard = (code: string) => require(`../../assets/cards/${code}.png`);
