/** @jsxImportSource theme-ui */
import { FunctionComponent, useMemo, useCallback, KeyboardEvent } from 'react';
import { CardObject, GameArea, TABLE } from '../../fixtures';
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

    const [{ isOver }, ref] = useDrop({
        accept: 'CARD',
        drop: areaClickCallback,
        collect: (monitor) => ({
            isOver: monitor.isOver(),
        }),
    });

    return (
        <div
            onClick={areaClickCallback}
            onKeyDown={areaKeydownCallback}
            role={canAddSelectedCard ? 'button' : undefined}
        >
            <h2 sx={{ textAlign: 'center', color: canAddSelectedCard ? 'yellow' : 'white' }}>{area}</h2>
            <div
                ref={ref}
                sx={{
                    background: isOver ? 'rgba(0, 0, 0, 0.2)' : 'unset',
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    gap: '20px',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: area === TABLE ? '490px' : '190px',
                    height: '120px',
                    border: canAddSelectedCard ? '3px solid yellow' : '3px solid white',
                    borderRadius: '4px',
                    margin: '20px',
                    padding: '10px',
                }}
            >
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
