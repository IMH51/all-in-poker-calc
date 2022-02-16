import { useMemo, FunctionComponent, KeyboardEvent } from 'react';
import { useDrag } from 'react-dnd';

import { cardCodes, CardObject } from '../../fixtures';
import { useReducerContext } from '../../reducer';

export const Card: FunctionComponent<CardProps> = ({ card, onClickHandler }) => {
    const { selectedCard, setSelectedCard } = useReducerContext();

    const [, ref] = useDrag({
        type: 'CARD',
        item: card,
    });

    // const isSelected = useMemo(() => card === selectedCard, [card, selectedCard]);

    const src = useMemo(() => getCardSrc(card.code), [card]);

    const onDragStartHandler = useMemo(
        () => () => selectedCard !== card ? setSelectedCard(card) : undefined,
        [card, setSelectedCard, selectedCard],
    );

    return cardCodes.includes(card.code) ? (
        <div
            role="button"
            tabIndex={0}
            onClick={() => onClickHandler && onClickHandler(card)}
            onKeyDown={(e: KeyboardEvent) => {
                e.key === 'Enter' && onClickHandler && onClickHandler(card);
            }}
            onDragStart={onDragStartHandler}
            ref={ref}
        >
            <img alt={card.name} src={src} />
        </div>
    ) : null;
};

type CardProps = {
    card: CardObject;
    onClickHandler?: (card: CardObject) => void;
};

const getCardSrc = (code: string) => require(`../../assets/cards/${code}.png`);
