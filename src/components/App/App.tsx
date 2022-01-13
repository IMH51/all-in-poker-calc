/** @jsxImportSource theme-ui */
import { useState, FunctionComponent } from 'react';
import { Themed } from 'theme-ui';
import { Card } from '../Card';
import { cardData } from '../../fixtures/';

export const App: FunctionComponent = () => {
    const [cards] = useState(cardData);
    return (
        <Themed.div data-testid="app">
            <p>All In: Drag and Drop Poker Calculator</p>
            <div
                sx={{
                    display: 'inline-flex',
                    width: '90%',
                    padding: '10px 20px',
                    margin: '0 5%',
                    overflow: 'overlay',
                    border: '3px solid white',
                    borderRadius: '25px',
                    '::-webkit-scrollbar': { background: 'transparent' },
                }}
            >
                <div sx={{ display: 'flex', wrap: 'nowrap', gap: '10px', margin: '5px 10px' }}>
                    {cards.map(({ name, code }) => (
                        <Card key={name} code={code} />
                    ))}
                </div>
            </div>
        </Themed.div>
    );
};
