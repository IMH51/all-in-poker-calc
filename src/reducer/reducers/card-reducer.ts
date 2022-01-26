import { PLAYER_1, PLAYER_2, TABLE } from '../../fixtures';
import { initialState } from '../state';
import { ADD_CARD, RESET_TABLE } from '../types';
import { mapCardState, addCardToArea, removeCardFromArea } from '../mappers';
import { ReducerType } from '.';
import { REMOVE_CARD } from '..';

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
            };
        case REMOVE_CARD:
            return {
                ...state,
                ...mapCardState(removeCardFromArea, gameState, payload),
            };
        case RESET_TABLE:
            return initialState;
        default:
            return state;
    }
};
