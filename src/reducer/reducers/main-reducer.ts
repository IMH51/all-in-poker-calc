import { combineReducers } from './reduce-reducers';
import { cardReducer } from './card-reducer';
import { oddsReducer } from './odds-reducer';
import { Reducer } from 'react';
import type { InitialState } from '..';
import type { CardArea, CardObject } from '../../fixtures';

export const combinedReducer = combineReducers(cardReducer, oddsReducer);

export type ReducerType = Reducer<InitialState, ReducerAction>;

export type ReducerAction = {
    type: string;
    payload?: ReducerPayload;
};

export type ReducerPayload = {
    area?: CardArea;
    card: CardObject;
};
