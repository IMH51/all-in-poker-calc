/** @jsxImportSource theme-ui */
import { FunctionComponent } from 'react';
import { CardArea as CardAreaType, CardArray, CardObject } from '../../fixtures';
import { Card } from '../Card';
import { useDrop } from 'react-dnd';
import { ADD_CARD, useReducerContext } from '../../reducer';

export const CardArea: FunctionComponent<CardAreaProps> = ({ area, cards }) => {
    const [, dispatch] = useReducerContext();
    const [{ isOver }, ref] = useDrop(() => ({
        accept: 'CARD',
        drop: (card: CardObject) => dispatch && dispatch({ type: ADD_CARD, payload: { area, card } }),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
        }),
    }));
    return (
        <div>
            <h2>{area}</h2>
            <div
                ref={ref}
                sx={{
                    background: isOver ? 'rgba(0, 0, 0, 0.2)' : 'unset',
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'center',
                    maxWidth: '800px',
                    minWidth: '300px',
                    minHeight: '200px',
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
    area: CardAreaType;
    cards: CardArray;
};
