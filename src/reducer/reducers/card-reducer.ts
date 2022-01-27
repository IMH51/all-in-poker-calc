import { PLAYER_1, PLAYER_2, SELECTED_CARD, TABLE } from '../../fixtures';
import { initialState } from '../state';
import { ADD_CARD, RESET_TABLE, SET_SELECTED_CARD, RESET_SELECTED_CARD, REMOVE_CARD } from '../types';
import { mapCardState, addCardToArea, removeCardFromArea } from '../mappers';
import { ReducerType } from '.';

export const cardReducer: ReducerType = (state, action) => {
    const { type, payload } = action;
    const { [PLAYER_1]: player1, [PLAYER_2]: player2, [TABLE]: table } = state;
    const gameState = {
        [PLAYER_1]: player1,
        [PLAYER_2]: player2,
        [TABLE]: table,
    };
    switch (type) {
        case ADD_CARD:
            return {
                ...state,
                ...mapCardState(addCardToArea, gameState, payload),
                [SELECTED_CARD]: undefined,
            };
        case REMOVE_CARD:
            return {
                ...state,
                ...mapCardState(removeCardFromArea, gameState, payload),
                [SELECTED_CARD]: undefined,
            };
        case SET_SELECTED_CARD:
            return {
                ...state,
                [SELECTED_CARD]: payload?.card,
            };
        case RESET_SELECTED_CARD:
            return {
                ...state,
                [SELECTED_CARD]: undefined,
            };
        case RESET_TABLE:
            return initialState;
        default:
            return state;
    }
};
