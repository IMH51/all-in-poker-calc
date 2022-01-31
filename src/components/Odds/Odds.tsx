/** @jsxImportSource theme-ui */
import { useMemo } from 'react';
import { useReducerContext } from '../../reducer';
import { OddsType } from '../../fixtures';

export const Odds = () => {
    const { player1, player2, table, odds, resetTable } = useReducerContext();

    const oddsAreas = useMemo(() => Object.keys(odds) as OddsType[], [odds]);

    const cardsOnTable = useMemo(() => !(player1.length || player2.length || table.length), [player1, player2, table]);

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
                onClick={resetTable}
                disabled={cardsOnTable}
            >
                Reset Table
            </button>
            <h2>Odds</h2>
            {oddsAreas.length ? (
                <div sx={{ display: 'flex', gap: '20px' }}>
                    {oddsAreas.map((odd) => (
                        <p key={odd}>{`${odd} - ${odds?.[odd] || ''}`}</p>
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
