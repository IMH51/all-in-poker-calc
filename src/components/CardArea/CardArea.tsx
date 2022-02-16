import { FunctionComponent, useMemo, useCallback, KeyboardEvent } from 'react';
import { CardObject, GameArea } from '../../fixtures';
import { Card } from '../Card';
import { useDrop } from 'react-dnd';
import { useReducerContext } from '../../reducer';

export const CardArea: FunctionComponent<CardAreaProps> = ({ area, limit }) => {
    const { state, selectedCard, addCardToArea, removeCardFromArea } = useReducerContext();

    const cards = useMemo(() => [...(state?.[area] || [])], [state, area]);

    const canAddSelectedCard = useMemo(() => selectedCard && cards.length < limit, [selectedCard, cards, limit]);

    const areaClickCallback = useCallback(() => {
        canAddSelectedCard ? addCardToArea(area) : alert("You can't add any more cards to this area!");
    }, [canAddSelectedCard, area, addCardToArea]);

    const areaKeydownCallback = useCallback(
        (keyboardEvent: KeyboardEvent) =>
            canAddSelectedCard
                ? keyboardEvent.code === 'Enter' && addCardToArea(area)
                : alert("You can't add any more cards to this area!"),
        [addCardToArea, canAddSelectedCard, area],
    );

    const cardCallback = useCallback(
        (card: CardObject) => {
            selectedCard && selectedCard !== card ? addCardToArea(area) : removeCardFromArea(card, area);
        },
        [selectedCard, area, addCardToArea, removeCardFromArea],
    );

    const [, ref] = useDrop({
        accept: 'CARD',
        drop: areaClickCallback,
        collect: (monitor) => ({
            isOver: monitor.isOver(),
        }),
    });

    return (
        <div
            onClick={selectedCard ? areaClickCallback : undefined}
            onKeyDown={selectedCard ? areaKeydownCallback : undefined}
            role={canAddSelectedCard ? 'button' : undefined}
        >
            <h2>{area}</h2>
            <div ref={ref}>
                {cards.map((card) => (
                    <Card key={card.name} card={card} onClickHandler={cardCallback} />
                ))}
            </div>
        </div>
    );
};

type CardAreaProps = {
    area: GameArea;
    limit: number;
};
