/** @jsxImportSource theme-ui */
import { CARDS } from '../../fixtures';
import { useReducerContext } from '../../reducer';
import { Card } from '../Card';

export const CardScroller = () => {
    const [state] = useReducerContext();
    const { [CARDS]: cards = [] } = state || {};

    return (
        <div
            sx={{
                display: 'inline-flex',
                width: '90%',
                padding: '10px 20px',
                margin: '0 3%',
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
    );
};
