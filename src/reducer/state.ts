import { cardData, CardArray, PLAYER_1, PLAYER_2 } from '../fixtures';

export const initialState = {
    cards: cardData,
    [PLAYER_1]: [],
    [PLAYER_2]: [],
    odds: {},
};

export type InitialState = {
    cards: CardArray;
    [PLAYER_1]: CardArray;
    [PLAYER_2]: CardArray;
    odds: OddsState;
};

export type OddsState = {
    [PLAYER_1]?: number;
    [PLAYER_2]?: number;
};
