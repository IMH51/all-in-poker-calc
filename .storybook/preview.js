import { storyThemeDecorator } from '../src/utils/story';

export const decorators = [storyThemeDecorator];

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};
