import { cardData, CardArray, PLAYER_1, PLAYER_2, CARDS, SPLIT_POT, TABLE } from '../fixtures';

export const initialState: InitialState = {
    [CARDS]: cardData,
    [PLAYER_1]: [],
    [PLAYER_2]: [],
    [TABLE]: [],
    odds: {},
};

export type InitialState = { odds: OddsState } & CardState & GameState;

export type CardState = {
    [CARDS]: CardArray;
};

export type GameState = { [TABLE]: CardArray } & PlayerState;

export type PlayerState = {
    [PLAYER_1]: CardArray;
    [PLAYER_2]: CardArray;
};

export type OddsState = {
    [PLAYER_1]?: string;
    [PLAYER_2]?: string;
    [SPLIT_POT]?: string;
};
