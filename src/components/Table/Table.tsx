/** @jsxImportSource theme-ui */
import { PLAYER_1, PLAYER_2, TABLE, GameArea } from '../../fixtures';
import { CardArea } from '../CardArea';

export const Table = () => {
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
