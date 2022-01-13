import type { Reducer } from 'react';
import { CardObject, CardArea } from '../fixtures';
import { initialState, InitialState } from './state';
import { ADD_CARD, RESET_TABLE } from './types';
import { mapCardState } from './mappers';

export const reducer: ReducerType = (state, action) => {
    const { type, payload } = action;
    const { odds, ...cardState } = state;
    switch (type) {
        case ADD_CARD:
            return {
                ...mapCardState(cardState, payload),
                odds,
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
