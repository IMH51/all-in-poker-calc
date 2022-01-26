import {
    cardData,
    CardArray,
    PLAYER_1,
    PLAYER_2,
    CARDS,
    SPLIT_POT,
    TABLE,
    ODDS,
    SELECTED_CARD,
    CardObject,
} from '../fixtures';

export const initialState: InitialState = {
    [CARDS]: cardData,
    [PLAYER_1]: [],
    [TABLE]: [],
    [PLAYER_2]: [],
    [ODDS]: {},
};

export type InitialState = { [ODDS]: OddsState; [SELECTED_CARD]?: CardObject } & CardState & GameState;

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
