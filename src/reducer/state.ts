import { cardData, CardArray, PLAYER_1, PLAYER_2, CARDS } from '../fixtures';

export const initialState: InitialState = {
    [CARDS]: cardData,
    [PLAYER_1]: [],
    [PLAYER_2]: [],
    odds: {},
};

export type InitialState = CardState & PlayerState & OddsState;

export type CardState = {
    [CARDS]: CardArray;
};

export type PlayerState = {
    [PLAYER_1]: CardArray;
    [PLAYER_2]: CardArray;
};

export type OddsState = {
    odds: {
        [PLAYER_1]?: number;
        [PLAYER_2]?: number;
    };
};
