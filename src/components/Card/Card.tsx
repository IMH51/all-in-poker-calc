/** @jsxImportSource theme-ui */
import { FunctionComponent } from 'react';
import { Themed } from 'theme-ui';
import { useDrag } from 'react-dnd';

import { cardCodes, CardObject } from '../../fixtures';

export const Card: FunctionComponent<CardProps> = ({ card }) => {
    const [, ref] = useDrag({
        type: 'CARD',
        item: card,
    });

    const { code } = card;

    return cardCodes.includes(code) ? <Themed.img ref={ref} src={getCard(code)} onClick={() => alert(code)} /> : null;
};

type CardProps = {
    card: CardObject;
};

const getCard = (code: string) => require(`../../assets/cards/${code}.png`);
