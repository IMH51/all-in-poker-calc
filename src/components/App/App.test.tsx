import { screen } from '@testing-library/react';

import { App } from '.';
import { renderWithThemeProvider } from '../../utils/test';

describe('<App />', () => {
    it('renders the component without crashing', () => {
        renderWithThemeProvider(<App />);

        expect(screen.getByTestId('app')).toBeInTheDocument();
    });
});
