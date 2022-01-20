import type { Reducer } from 'react';
import { CardObject, CardArea, PLAYER_1, PLAYER_2 } from '../fixtures';
import { initialState, InitialState } from './state';
import { ADD_CARD, RESET_TABLE } from './types';
import { mapCardState } from './mappers';

export const reducer: ReducerType = (state, action) => {
    const { type, payload } = action;
    const { [PLAYER_1]: player1, [PLAYER_2]: player2 } = state;
    const playerState = {
        [PLAYER_1]: player1,
        [PLAYER_2]: player2,
    };
    switch (type) {
        case ADD_CARD:
            return {
                ...state,
                ...mapCardState(playerState, payload),
            };
        case RESET_TABLE:
            return initialState;
        default:
            return state;
    }
};

export type ReducerType = Reducer<InitialState, ReducerAction>;

export type ReducerAction = {
    type: string;
    payload: ReducerPayload;
};

export type ReducerPayload = {
    area: CardArea;
    card: CardObject;
};
