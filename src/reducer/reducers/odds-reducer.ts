import { PLAYER_1, PLAYER_2, TABLE, ODDS } from '../../fixtures';
import { ADD_CARD, REMOVE_CARD } from '../types';
import { mapOdds } from '../mappers';
import { ReducerType } from '.';

export const oddsReducer: ReducerType = (state, action) => {
    const { type } = action;
    const { [PLAYER_1]: player1, [PLAYER_2]: player2, [TABLE]: table } = state;
    switch (type) {
        case ADD_CARD:
        case REMOVE_CARD:
            if (player1.length === 2 && player2.length === 2 && 3 <= table.length && table.length <= 5) {
                const gameState = { [PLAYER_1]: player1, [PLAYER_2]: player2, [TABLE]: table };
                return {
                    ...state,
                    [ODDS]: mapOdds(gameState),
                };
            } else {
                return {
                    ...state,
                    [ODDS]: {},
                };
            }
        default:
            return state;
    }
};
