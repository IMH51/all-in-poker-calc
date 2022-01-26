/** @jsxImportSource theme-ui */
import { useReducer, FunctionComponent } from 'react';
import { Themed } from 'theme-ui';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

import { ReducerContext, combinedReducer, initialState, ReducerType } from '../../reducer';

import { CardScroller } from '../Scroller';
import { Odds } from '../Odds';
import { Table } from '../Table';

export const App: FunctionComponent = () => (
    <DndProvider backend={HTML5Backend}>
        <ReducerContext.Provider value={useReducer<ReducerType>(combinedReducer, initialState)}>
            <Themed.div data-testid="app">
                <h1 sx={{ textAlign: 'center' }}>All In: Drag and Drop Poker Calculator</h1>
                <CardScroller />
                <Odds />
                <Table />
            </Themed.div>
        </ReducerContext.Provider>
    </DndProvider>
);
