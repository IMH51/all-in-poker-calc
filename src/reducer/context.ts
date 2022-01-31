import { createContext, Dispatch, ReducerAction } from 'react';
import { InitialState } from './state';
import { ReducerType } from './reducers/main-reducer';

export const ReducerContext = createContext<ContextType>([]);

type ContextType = Partial<[InitialState, Dispatch<ReducerAction<ReducerType>>]>;
