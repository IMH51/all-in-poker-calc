import { PLAYER_1, PLAYER_2, TABLE, GameArea } from '../../fixtures';
import { CardArea } from '../CardArea';

export const Table = () => {
    const playerArray: GameArea[] = [PLAYER_1, TABLE, PLAYER_2];

    return (
        <div>
            {playerArray.map((player) => (
                <CardArea key={player} area={player} limit={player === TABLE ? 5 : 2} />
            ))}
        </div>
    );
};
