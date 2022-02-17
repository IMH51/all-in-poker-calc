import { Providers } from '../src/components/Providers';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

export const decorators = [(story) => <Providers>{story()}</Providers>];

export const parameters = {
    viewport: {
        viewports: INITIAL_VIEWPORTS,
        defaultViewport: 'iphone12',
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};
