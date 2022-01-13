import { createContext } from 'react';
import { InitialState } from './state';

export const StateContext = createContext<Partial<InitialState>>({});
