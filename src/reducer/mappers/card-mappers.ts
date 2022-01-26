import { ReducerPayload } from '../reducers/main-reducer';
import { GameState } from '..';
import { CardArray, GameArea, PlayerArea } from '../../fixtures';

export const mapCardState = (
    mapperFunction: MapperFunction,
    playerState: GameState,
    payload?: ReducerPayload,
): GameState => {
    if (!payload) {
        return playerState;
    }
    const cardStateKeys = Object.keys(playerState) as PlayerArea[];
    return cardStateKeys.reduce(
        (newState, key) => ({
            ...newState,
            [key]: mapperFunction(key, playerState, payload),
        }),
        {},
    ) as GameState;
};

export const addCardToArea: MapperFunction = (key, state, payload) => {
    const { area, card } = payload;
    const currentArea = [...state[key]];

    if (key === area) {
        const cardIsInCurrentArea = currentArea.map(({ code }) => code).includes(card.code);

        return cardIsInCurrentArea ? currentArea : [...currentArea, card];
    } else {
        return currentArea.filter(({ code }) => code !== card.code);
    }
};

export const removeCardFromArea: MapperFunction = (key, state, payload) => {
    const { area, card } = payload;
    const currentArea = [...state[key]];

    if (key === area) {
        return currentArea.filter(({ code }) => code !== card.code);
    } else {
        return currentArea;
    }
};

type MapperFunction = (key: GameArea, state: GameState, payload: ReducerPayload) => CardArray;
