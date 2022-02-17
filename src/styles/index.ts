import type { Theme } from 'theme-ui';

export const theme: Theme = {
    breakpoints: ['0px', '768px', '1024px'],
    space: ['5px', '10px', '15px', '20px', '25px'],
    fonts: {
        default: 'Arial, sans-serif',
    },
    colors: {
        primary: 'white',
        secondary: 'yellow',
        background: 'darkgreen',
    },
    styles: {
        root: {
            fontFamily: 'default',
            color: 'primary',
            background: 'background',
        },
    },
    cards: {
        default: {
            width: ['50px', '75px', '100px'],
            border: '3px solid transparent',
            borderRadius: '5px',
        },
        selected: {
            variant: 'cards.default',
            borderColor: 'secondary',
        },
    },
    layout: {
        flexRow: {
            display: 'flex',
            flexDirection: 'row',
        },
        flexColumn: {
            display: 'flex',
            flexDirection: 'column',
        },
        main: {
            textAlign: 'center',
        },
        cardArea: {
            variant: 'layout.flexRow',
            borderWidth: '3px',
            borderStyle: 'solid',
            bordercolor: 'primary',
            borderRadius: '5px',
            margin: '1',
            padding: '1',
            gap: '1',
        },
        scroller: {
            variant: 'layout.cardArea',
            overflow: 'auto',
            paddingBottom: '0',
            scrollbarColor: 'white',
            '&::-webkit-scrollbar': {
                background: 'transparent',
                height: '24px',
            },
            '&::-webkit-scrollbar-thumb': {
                border: '8px solid transparent',
                borderRadius: '12px',
                background: 'rgba(255,255,255,0.85)',
                backgroundClip: 'padding-box',
                opacity: '0.5',
                '&:active': {
                    border: '8px solid transparent',
                    borderRadius: '12px',
                    background: 'rgba(204,204,204,0.85)',
                    backgroundClip: 'padding-box',
                },
            },
        },
        player: {
            variant: 'layout.cardArea',
        },
        table: {
            variant: 'layout.cardArea',
        },
    },
};
