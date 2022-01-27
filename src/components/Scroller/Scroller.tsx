/** @jsxImportSource theme-ui */
import { useMemo, useCallback } from 'react';
import { CardObject, CARDS, PLAYER_1, PLAYER_2, SELECTED_CARD, TABLE } from '../../fixtures';
import { useReducerContext, ADD_CARD, SET_SELECTED_CARD, RESET_SELECTED_CARD } from '../../reducer';
import { Card } from '../Card';
import { useDrop } from 'react-dnd';

export const CardScroller = () => {
    const [state, dispatch] = useReducerContext();
    const {
        [CARDS]: cards = [],
        [PLAYER_1]: player1 = [],
        [PLAYER_2]: player2 = [],
        [TABLE]: table = [],
        [SELECTED_CARD]: selectedCard,
    } = state || {};

    const [{ isOver }, ref] = useDrop({
        accept: 'CARD',
        drop: (card: CardObject) => dispatch && dispatch({ type: ADD_CARD, payload: { area: CARDS, card } }),
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

    const setSelectedCardOnClick = useCallback(
        (card: CardObject) => () => dispatch && dispatch({ type: SET_SELECTED_CARD, payload: { card } }),
        [dispatch],
    );

    const resetSelectedCardOnClick = useCallback(() => dispatch && dispatch({ type: RESET_SELECTED_CARD }), [dispatch]);

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
                    <Card
                        key={card.name}
                        card={card}
                        selected={card === selectedCard}
                        onClick={
                            selectedCard && selectedCard === card
                                ? resetSelectedCardOnClick
                                : setSelectedCardOnClick(card)
                        }
                    />
                ))}
            </div>
        </div>
    );
};
