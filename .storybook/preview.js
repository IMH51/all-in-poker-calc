import { Providers } from '../src/components/Providers';

export const decorators = [(story) => <Providers>{story()}</Providers>];

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};
