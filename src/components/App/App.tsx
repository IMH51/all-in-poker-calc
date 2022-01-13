/** @jsxImportSource theme-ui */
import { useReducer, FunctionComponent } from 'react';
import { Themed } from 'theme-ui';

import { ReducerContext, reducer, initialState } from '../../reducer';
import { CardScroller } from '../Scroller/Scroller';

export const App: FunctionComponent = () => (
    <ReducerContext.Provider value={useReducer(reducer, initialState)}>
        <Themed.div data-testid="app">
            <p>All In: Drag and Drop Poker Calculator</p>
            <CardScroller />
        </Themed.div>
    </ReducerContext.Provider>
);
