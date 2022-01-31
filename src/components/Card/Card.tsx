/** @jsxImportSource theme-ui */
import { useMemo, FunctionComponent } from 'react';
import { Themed } from 'theme-ui';
import { useDrag } from 'react-dnd';

import { cardCodes, CardObject } from '../../fixtures';
import { useReducerContext } from '../../reducer';

export const Card: FunctionComponent<CardProps> = ({ card, onClickHandler }) => {
    const { selectedCard, setSelectedCard } = useReducerContext();

    const [, ref] = useDrag({
        type: 'CARD',
        item: card,
    });

    const isSelected = useMemo(() => card === selectedCard, [card, selectedCard]);

    const src = useMemo(() => getCardSrc(card.code), [card]);

    const onDragStartHandler = useMemo(
        () => () => selectedCard !== card ? setSelectedCard(card) : undefined,
        [card, setSelectedCard, selectedCard],
    );

    return cardCodes.includes(card.code) ? (
        <Themed.img
            ref={ref}
            sx={{ border: isSelected ? '3px solid yellow' : '3px solid transparent', borderRadius: '4px' }}
            src={src}
            onClick={() => onClickHandler && onClickHandler(card)}
            onDragStart={onDragStartHandler}
        />
    ) : null;
};

type CardProps = {
    card: CardObject;
    onClickHandler?: (card: CardObject) => void;
};

const getCardSrc = (code: string) => require(`../../assets/cards/${code}.png`);
