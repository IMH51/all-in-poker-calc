import { createContext, useContext, Dispatch, ReducerAction } from 'react';
import { InitialState } from './state';
import { ReducerType } from './reducers/main-reducer';

export const ReducerContext = createContext<ContextType>([]);

export const useReducerContext = () => useContext(ReducerContext);

type ContextType = Partial<[InitialState, Dispatch<ReducerAction<ReducerType>>]>;
