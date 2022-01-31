/** @jsxImportSource theme-ui */
import { useMemo, useCallback } from 'react';
import { CARDS, CardObject } from '../../fixtures';
import { useReducerContext } from '../../reducer';
import { Card } from '../Card';
import { useDrop } from 'react-dnd';

export const CardScroller = () => {
    const { cards, player1, player2, table, selectedCard, addCardToArea, resetSelectedCard, setSelectedCard } =
        useReducerContext();

    const [{ isOver }, ref] = useDrop({
        accept: 'CARD',
        drop: () => addCardToArea(CARDS),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
        }),
    });

    const playerCardCodes = useMemo(
        () => [...player1, ...player2, ...table].map(({ code }) => code),
        [player1, player2, table],
    );

    const availableCards = useMemo(
        () => cards.filter((card) => !playerCardCodes.includes(card.code)),
        [cards, playerCardCodes],
    );

    const onClickHandler = useCallback(
        (card: CardObject) => (selectedCard && selectedCard === card ? resetSelectedCard() : setSelectedCard(card)),
        [selectedCard, resetSelectedCard, setSelectedCard],
    );
    return (
        <div
            ref={ref}
            sx={{
                background: isOver ? 'rgba(0, 0, 0, 0.2)' : 'unset',
                display: 'inline-flex',
                width: '90%',
                padding: '10px 20px',
                margin: '0 3%',
                overflow: 'overlay',
                border: '3px solid white',
                borderRadius: '25px',
                '::-webkit-scrollbar': { background: 'transparent' },
            }}
        >
            <div sx={{ display: 'flex', wrap: 'nowrap', gap: '10px', margin: '5px 0' }}>
                {availableCards.map((card) => (
                    <Card key={card.name} card={card} onClickHandler={onClickHandler} />
                ))}
            </div>
        </div>
    );
};
