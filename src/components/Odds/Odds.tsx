/** @jsxImportSource theme-ui */
import { useMemo } from 'react';
import { useReducerContext, RESET_TABLE } from '../../reducer';
import { OddsType, ODDS, PLAYER_1, PLAYER_2, TABLE } from '../../fixtures';

export const Odds = () => {
    const [state, dispatch] = useReducerContext();
    const { [ODDS]: odds = {}, [PLAYER_1]: player1 = [], [PLAYER_2]: player2 = [], [TABLE]: table = [] } = state || {};

    const oddsAreas = useMemo(() => Object.keys(odds), [odds]);

    const cardsOnTable = useMemo(() => ![...player1, ...player2, ...table].length, [player1, player2, table]);

    return (
        <div sx={{ margin: '20px 0', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <button
                sx={{
                    margin: '10px 0',
                    padding: '10px',
                    background: 'green',
                    color: 'white',
                    border: '3px solid white',
                    borderRadius: '25px',
                    cursor: cardsOnTable ? 'default' : 'pointer',
                    opacity: cardsOnTable ? '0.5' : 'unset',
                }}
                onClick={() => dispatch && dispatch({ type: RESET_TABLE })}
                disabled={cardsOnTable}
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
                <p>
                    There must be two cards on each players hand and at least 3 on the table before odds can be
                    calculated
                </p>
            )}
        </div>
    );
};
