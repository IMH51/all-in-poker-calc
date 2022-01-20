/** @jsxImportSource theme-ui */
import { useReducer, FunctionComponent } from 'react';
import { Themed } from 'theme-ui';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

import { ReducerContext, reducer, initialState, useReducerContext } from '../../reducer';
import { CardScroller } from '../Scroller/Scroller';
import { PLAYER_1, PLAYER_2 } from '../../fixtures';
import type { PlayerArea } from '../../fixtures';
import { CardArea } from '../CardArea/CardArea';

export const App: FunctionComponent = () => (
    <DndProvider backend={HTML5Backend}>
        <ReducerContext.Provider value={useReducer(reducer, initialState)}>
            <Themed.div data-testid="app">
                <p>All In: Drag and Drop Poker Calculator</p>
                <CardScroller />
                <Table />
            </Themed.div>
        </ReducerContext.Provider>
    </DndProvider>
);

const Table = () => {
    const [state] = useReducerContext();
    const playerArray: PlayerArea[] = [PLAYER_1, PLAYER_2];
    return (
        <div sx={{ width: '100%', background: 'green', display: 'inline-flex', justifyContent: 'center' }}>
            {playerArray.map((player) => (
                <CardArea key={player} area={player} cards={state?.[player] || []} />
            ))}
        </div>
    );
};
