import { useReducer, FunctionComponent } from 'react';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import { ThemeProvider } from 'theme-ui';
import { theme } from '../../styles';

import { ReducerContext, combinedReducer, initialState, ReducerType } from '../../reducer';

export const Providers: FunctionComponent = ({ children }) => (
    <DndProvider backend={HTML5Backend}>
        <ReducerContext.Provider value={useReducer<ReducerType>(combinedReducer, initialState)}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </ReducerContext.Provider>
    </DndProvider>
);
