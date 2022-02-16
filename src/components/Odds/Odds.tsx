import { useMemo } from 'react';
import { useReducerContext } from '../../reducer';
import { OddsType } from '../../fixtures';

export const Odds = () => {
    const { player1, player2, table, odds, resetTable } = useReducerContext();

    const oddsAreas = useMemo(() => Object.keys(odds) as OddsType[], [odds]);

    const cardsOnTable = useMemo(() => !(player1.length || player2.length || table.length), [player1, player2, table]);

    return (
        <div>
            <button onClick={resetTable} disabled={cardsOnTable}>
                Reset Table
            </button>
            <h2>Odds</h2>
            {oddsAreas.length ? (
                <div>
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
