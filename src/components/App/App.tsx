/** @jsxImportSource theme-ui */
import { useReducer, FunctionComponent } from 'react';
import { Themed } from 'theme-ui';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

import {
    ReducerContext,
    combinedReducer,
    initialState,
    useReducerContext,
    RESET_TABLE,
    ReducerType,
} from '../../reducer';
import { CardScroller } from '../Scroller/Scroller';
import { OddsType, PLAYER_1, PLAYER_2, TABLE } from '../../fixtures';
import type { GameArea } from '../../fixtures';
import { CardArea } from '../CardArea/CardArea';

export const App: FunctionComponent = () => (
    <DndProvider backend={HTML5Backend}>
        <ReducerContext.Provider value={useReducer<ReducerType>(combinedReducer, initialState)}>
            <Themed.div data-testid="app">
                <p sx={{ textAlign: 'center' }}>All In: Drag and Drop Poker Calculator</p>
                <CardScroller />
                <Odds />
                <Table />
            </Themed.div>
        </ReducerContext.Provider>
    </DndProvider>
);

const Table = () => {
    const playerArray: GameArea[] = [PLAYER_1, TABLE, PLAYER_2];
    return (
        <div
            sx={{
                width: '100%',
                background: 'green',
                display: 'inline-flex',
                gap: '20px',
                justifyContent: 'space-around',
            }}
        >
            {playerArray.map((player) => (
                <CardArea key={player} area={player} limit={player === TABLE ? 5 : 2} />
            ))}
        </div>
    );
};

const Odds = () => {
    const [state, dispatch] = useReducerContext();
    const { odds = {} } = state || {};
    const oddsAreas = Object.keys(odds);

    return (
        <div sx={{ margin: '20px 0', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <button
                sx={{
                    padding: '10px',
                    background: 'green',
                    color: 'white',
                    border: '3px solid white',
                    borderRadius: '25px',
                    cursor: state === initialState ? 'default' : 'pointer',
                    opacity: state === initialState ? '0.5' : 'unset',
                }}
                onClick={() => dispatch && dispatch({ type: RESET_TABLE })}
                disabled={state === initialState}
            >
                Reset Table
            </button>
            <h2>Odds</h2>
            {oddsAreas.length ? (
                <div sx={{ display: 'flex', gap: '20px' }}>
                    {oddsAreas.map((odd) => (
                        <p key={odd}>{`${odd} - ${odds?.[odd as OddsType] || ''}`}</p>
                    ))}
                </div>
            ) : (
                'There must be two cards on each players hand and at least 3 on the table before odds can be calculated'
            )}
        </div>
    );
};
