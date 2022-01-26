/** @jsxImportSource theme-ui */
import { FunctionComponent, useMemo, useCallback, KeyboardEvent } from 'react';
import { GameArea, CardObject, TABLE, SELECTED_CARD } from '../../fixtures';
import { Card } from '../Card';
import { useDrop } from 'react-dnd';
import { ADD_CARD, REMOVE_CARD, useReducerContext } from '../../reducer';

export const CardArea: FunctionComponent<CardAreaProps> = ({ area, limit }) => {
    const [state, dispatch] = useReducerContext();

    const cards = useMemo(() => [...(state?.[area] || [])], [state, area]);

    const selectedCard = useMemo(() => state?.[SELECTED_CARD], [state]);

    const canAddSelectedCard = useMemo(() => selectedCard && cards.length < limit, [selectedCard, cards, limit]);

    const addCardOnAreaClick = () =>
        dispatch && selectedCard && dispatch({ type: ADD_CARD, payload: { area, card: selectedCard } });

    const removeCardOnClick = (card: CardObject) => () =>
        dispatch && dispatch({ type: REMOVE_CARD, payload: { area, card } });

    const dropCallback = useCallback(
        (card: CardObject) => {
            if (cards.length < limit) {
                dispatch && dispatch({ type: ADD_CARD, payload: { area, card } });
            } else {
                alert("You can't add any more cards to this area!");
            }
        },
        [area, cards.length, limit, dispatch],
    );

    const [{ isOver }, ref] = useDrop({
        accept: 'CARD',
        drop: dropCallback,
        collect: (monitor) => ({
            isOver: monitor.isOver(),
        }),
    });

    return (
        <div
            onClick={canAddSelectedCard ? addCardOnAreaClick : undefined}
            onKeyDown={
                canAddSelectedCard
                    ? (keyboardEvent: KeyboardEvent) => keyboardEvent.code === 'Enter' && addCardOnAreaClick()
                    : undefined
            }
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
                    <Card
                        key={card.name}
                        card={card}
                        onClick={canAddSelectedCard ? undefined : removeCardOnClick(card)}
                    />
                ))}
            </div>
        </div>
    );
};

type CardAreaProps = {
    area: GameArea;
    limit: number;
};
