/** @jsxImportSource theme-ui */
import { useMemo, FunctionComponent, MouseEventHandler, useCallback } from 'react';
import { Themed } from 'theme-ui';
import { useDrag } from 'react-dnd';

import { cardCodes, CardObject, SELECTED_CARD } from '../../fixtures';
import { useReducerContext, SET_SELECTED_CARD } from '../../reducer';

export const Card: FunctionComponent<CardProps> = ({ card, onClick, selected }) => {
    const [state, dispatch] = useReducerContext();
    const { [SELECTED_CARD]: selectedCard } = state || {};

    const [, ref] = useDrag({
        type: 'CARD',
        item: card,
    });

    const src = useMemo(() => getCard(card.code), [card]);

    const setSelectedCardOnClick = useCallback(
        () => dispatch && dispatch({ type: SET_SELECTED_CARD, payload: { card } }),
        [card, dispatch],
    );

    const onDragStartHandler = useMemo(
        () => (selectedCard !== card ? setSelectedCardOnClick : undefined),
        [card, setSelectedCardOnClick, selectedCard],
    );

    return cardCodes.includes(card.code) ? (
        <Themed.img
            ref={ref}
            sx={{ border: selected ? '3px solid yellow' : '3px solid transparent', borderRadius: '4px' }}
            src={src}
            onClick={onClick}
            onDragStart={onDragStartHandler}
        />
    ) : null;
};

type CardProps = {
    card: CardObject;
    onClick?: MouseEventHandler;
    selected?: boolean;
};

const getCard = (code: string) => require(`../../assets/cards/${code}.png`);
