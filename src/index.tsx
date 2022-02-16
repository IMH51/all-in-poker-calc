import { render } from 'react-dom';

import { Providers } from './components/Providers';
import { App } from './components/App';

render(
    <Providers>
        <App />
    </Providers>,
    document.getElementById('root'),
);
