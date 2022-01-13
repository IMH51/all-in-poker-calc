import { CardObject, PLAYER_1, PLAYER_2 } from '../fixtures';

export const removeCard = (payload: ReducerAction['payload']) => {};

export type ReducerAction = {
    type: string;
    payload: {
        area: typeof PLAYER_2 | typeof PLAYER_1;
        card: CardObject;
    };
};
