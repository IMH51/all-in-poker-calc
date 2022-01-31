import { useCallback, useContext } from 'react';
import { ADD_CARD, ReducerContext, REMOVE_CARD, RESET_SELECTED_CARD, RESET_TABLE, SET_SELECTED_CARD } from '.';
import { CARDS, PLAYER_1, PLAYER_2, SELECTED_CARD, TABLE, ODDS, CardObject, CardArea } from '../fixtures';

export const useReducerContext = () => {
    const [state, dispatch] = useContext(ReducerContext);

    const {
        [CARDS]: cards = [],
        [PLAYER_1]: player1 = [],
        [PLAYER_2]: player2 = [],
        [TABLE]: table = [],
        [SELECTED_CARD]: selectedCard,
        [ODDS]: odds = {},
    } = state || {};

    const addSelectedCardToArea = useCallback(
        (area: CardArea) =>
            dispatch && selectedCard && dispatch({ type: ADD_CARD, payload: { area, card: selectedCard } }),
        [dispatch, selectedCard],
    );

    const addCardToArea = useCallback(
        (area: CardArea) =>
            dispatch && selectedCard && dispatch({ type: ADD_CARD, payload: { area, card: selectedCard } }),
        [dispatch, selectedCard],
    );

    const removeCardFromArea = useCallback(
        (card: CardObject, area: CardArea) => dispatch && dispatch({ type: REMOVE_CARD, payload: { area, card } }),
        [dispatch],
    );

    const setSelectedCard = useCallback(
        (card: CardObject) => dispatch && dispatch({ type: SET_SELECTED_CARD, payload: { card } }),
        [dispatch],
    );

    const resetSelectedCard = useCallback(() => dispatch && dispatch({ type: RESET_SELECTED_CARD }), [dispatch]);

    const resetTable = useCallback(() => dispatch && dispatch({ type: RESET_TABLE }), [dispatch]);

    return {
        state,
        cards,
        player1,
        player2,
        table,
        selectedCard,
        odds,
        addCardToArea,
        addSelectedCardToArea,
        setSelectedCard,
        resetSelectedCard,
        removeCardFromArea,
        resetTable,
    };
};
