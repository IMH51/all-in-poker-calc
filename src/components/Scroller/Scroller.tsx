/** @jsxImportSource theme-ui */
import { CardObject, CARDS, PLAYER_1, PLAYER_2 } from '../../fixtures';
import { useReducerContext, ADD_CARD } from '../../reducer';
import { Card } from '../Card';
import { useDrop } from 'react-dnd';

export const CardScroller = () => {
    const [state, dispatch] = useReducerContext();
    const { [CARDS]: cards = [], [PLAYER_1]: player1 = [], [PLAYER_2]: player2 = [] } = state || {};

    const [{ isOver }, ref] = useDrop(() => ({
        accept: 'CARD',
        drop: (card: CardObject) => dispatch && dispatch({ type: ADD_CARD, payload: { area: CARDS, card } }),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
        }),
    }));

    const playerCardCodes = [...player1, ...player2].map(({ code }) => code);
    const availableCards = cards.filter((card) => !playerCardCodes.includes(card.code));

    return (
        <div
            ref={ref}
            sx={{
                background: isOver ? 'rgba(0, 0, 0, 0.2)' : 'unset',
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
                {availableCards.map((card) => (
                    <Card key={card.name} card={card} />
                ))}
            </div>
        </div>
    );
};
