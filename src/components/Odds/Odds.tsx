/** @jsxImportSource theme-ui */
import { initialState, useReducerContext, RESET_TABLE } from '../../reducer';
import { OddsType, ODDS } from '../../fixtures';

export const Odds = () => {
    const [state, dispatch] = useReducerContext();
    const { [ODDS]: odds = {} } = state || {};
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
