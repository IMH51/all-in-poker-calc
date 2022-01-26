/** @jsxImportSource theme-ui */
import { CARDS, ODDS, TABLE, GameArea } from '../../fixtures';
import { useReducerContext } from '../../reducer';
import { CardArea } from '../CardArea';

export const Table = () => {
    const [state = {}] = useReducerContext();
    const playerArray = Object.keys(state).filter((key) => ![CARDS, ODDS].includes(key)) as GameArea[];

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
