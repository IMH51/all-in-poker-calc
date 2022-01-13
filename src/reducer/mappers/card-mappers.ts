import { ReducerPayload } from '../reducer';
import { CardState, InitialState } from '..';
import { CardArea } from '../../fixtures';

export const mapCardState = (cardState: CardState, payload: ReducerPayload) => {
    const cardStateKeys = Object.keys(cardState) as CardArea[];
    return cardStateKeys.reduce(
        (newState, key) => ({
            ...newState,
            [key]: mapCurrentKey(key, cardState, payload),
        }),
        {},
    ) as InitialState;
};

const mapCurrentKey = (key: CardArea, state: CardState, payload: ReducerPayload) => {
    const { area, card } = payload;
    const currentArea = state[area] || [];
    return key === area ? [...currentArea, card] : currentArea.filter(({ code }) => code !== card.code);
};
