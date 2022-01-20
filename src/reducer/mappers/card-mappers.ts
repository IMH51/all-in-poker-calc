import { ReducerPayload } from '../reducer';
import { InitialState, PlayerState } from '..';
import { PlayerArea } from '../../fixtures';

export const mapCardState = (playerState: PlayerState, payload: ReducerPayload) => {
    const cardStateKeys = Object.keys(playerState) as PlayerArea[];
    return cardStateKeys.reduce(
        (newState, key) => ({
            ...newState,
            [key]: mapCurrentKey(key, playerState, payload),
        }),
        {},
    ) as InitialState;
};

const mapCurrentKey = (key: PlayerArea, state: PlayerState, payload: ReducerPayload) => {
    const { area, card } = payload;
    const currentArea = [...state[key]];

    if (key === area) {
        const cardIsInCurrentArea = currentArea.map(({ code }) => code).includes(card.code);

        return cardIsInCurrentArea ? currentArea : [...currentArea, card];
    } else {
        return currentArea.filter(({ code }) => code !== card.code);
    }
};
