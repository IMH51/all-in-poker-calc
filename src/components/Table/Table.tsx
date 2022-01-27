/** @jsxImportSource theme-ui */
import { useMemo } from 'react';
import { CARDS, ODDS, TABLE, GameArea, SELECTED_CARD } from '../../fixtures';
import { useReducerContext } from '../../reducer';
import { CardArea } from '../CardArea';

export const Table = () => {
    const [state = {}] = useReducerContext();

    const playerArray = useMemo(
        () => Object.keys(state).filter((key) => ![CARDS, ODDS, SELECTED_CARD].includes(key)) as GameArea[],
        [state],
    );

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
