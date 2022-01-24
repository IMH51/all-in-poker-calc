import { TexasHoldem } from 'poker-odds-calc';
import { GameState, OddsState } from '..';
import { PLAYER_1, PLAYER_2, TABLE, SPLIT_POT, CardArray } from '../../fixtures';

export const mapOdds = (state: GameState): OddsState => {
    const { [PLAYER_1]: player1, [PLAYER_2]: player2, [TABLE]: table } = state || {};

    const Table = new TexasHoldem();

    Table.addPlayer(mapCodes(player1) as HandType)
        .addPlayer(mapCodes(player2) as HandType)
        .setBoard(mapCodes(table));

    const Result = Table.calculate();

    const [player1Odds, player2Odds] = Result.getPlayers().map((player) => +player.getWinsPercentage().toFixed(2));

    const splitPot = +(100 - player1Odds - player2Odds).toFixed(2);

    return {
        [PLAYER_1]: `${player1Odds}%`,
        [PLAYER_2]: `${player2Odds}%`,
        [SPLIT_POT]: `${splitPot}%`,
    };
};

const mapCodes = (cards: CardArray) => cards.map(({ code }) => code);

type HandType = [string, string] | [string, string, string, string];
