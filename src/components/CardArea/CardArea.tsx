/** @jsxImportSource theme-ui */
import { FunctionComponent, useMemo, useCallback } from 'react';
import { GameArea, CardObject, TABLE } from '../../fixtures';
import { Card } from '../Card';
import { useDrop } from 'react-dnd';
import { ADD_CARD, useReducerContext } from '../../reducer';

export const CardArea: FunctionComponent<CardAreaProps> = ({ area, limit }) => {
    const [state, dispatch] = useReducerContext();

    const cards = useMemo(() => [...(state?.[area] || [])], [state, area]);

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
        <div>
            <h2 sx={{ textAlign: 'center' }}>{area}</h2>
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
                    width: area === TABLE ? '470px' : '190px',
                    height: '120px',
                    border: '3px solid white',
                    borderRadius: '4px',
                    margin: '20px',
                    padding: '10px',
                }}
            >
                {cards.map((card) => (
                    <Card key={card.name} card={card} />
                ))}
            </div>
        </div>
    );
};

type CardAreaProps = {
    area: GameArea;
    limit: number;
};
