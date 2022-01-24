import { Reducer, ReducerAction } from 'react';
import { InitialState } from '../state';
import { ReducerType } from './main-reducer';

export const combineReducers =
    (...reducers: Reducer<InitialState, ReducerAction<ReducerType>>[]) =>
    (state: InitialState, action: ReducerAction<ReducerType>) =>
        reducers.reduce((finalState, reducer) => reducer(finalState, action), state);
