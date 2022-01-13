import type { Reducer } from 'react';
import { initialState, InitialState } from './state';
import { ADD_CARD, REMOVE_CARD, RESET_TABLE } from './types';
import { ReducerAction } from './actions';

export const reducer: Reducer<InitialState, ReducerAction> = (state, action) => {
    const { type, payload } = action;
    const { area, card } = payload;
    switch (type) {
        case ADD_CARD:
            return {
                ...state,
                [area]: [...state[area], card],
            };
        case REMOVE_CARD:
            return {
                ...state,
                [area]: [...state[area].filter(({ code }) => code !== card.code)],
            };
        case RESET_TABLE:
            return initialState;
        default:
            return state;
    }
};
