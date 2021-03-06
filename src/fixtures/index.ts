export const CARDS = 'Cards';

export const PLAYER_1 = 'Player 1';

export const PLAYER_2 = 'Player 2';

export const TABLE = 'Table';

export const SPLIT_POT = 'Split Pot';

export const ODDS = 'Odds';

export const SELECTED_CARD = 'Selected Card';

export type GameArea = PlayerArea | typeof TABLE;

export type PlayerArea = typeof PLAYER_2 | typeof PLAYER_1;

export type OddsType = PlayerArea | typeof SPLIT_POT;

export type CardArea = GameArea | typeof CARDS;

export const cardData: CardArray = [
    { name: 'Ace Diamonds', code: 'Ad' },
    { name: '2 Diamonds', code: '2d' },
    { name: '3 Diamonds', code: '3d' },
    { name: '4 Diamonds', code: '4d' },
    { name: '5 Diamonds', code: '5d' },
    { name: '6 Diamonds', code: '6d' },
    { name: '7 Diamonds', code: '7d' },
    { name: '8 Diamonds', code: '8d' },
    { name: '9 Diamonds', code: '9d' },
    { name: '10 Diamonds', code: 'Td' },
    { name: 'Jack Diamonds', code: 'Jd' },
    { name: 'Queen Diamonds', code: 'Qd' },
    { name: 'King Diamonds', code: 'Kd' },
    { name: 'Ace Hearts', code: 'Ah' },
    { name: '2 Hearts', code: '2h' },
    { name: '3 Hearts', code: '3h' },
    { name: '4 Hearts', code: '4h' },
    { name: '5 Hearts', code: '5h' },
    { name: '6 Hearts', code: '6h' },
    { name: '7 Hearts', code: '7h' },
    { name: '8 Hearts', code: '8h' },
    { name: '9 Hearts', code: '9h' },
    { name: '10 Hearts', code: 'Th' },
    { name: 'Jack Hearts', code: 'Jh' },
    { name: 'Queen Hearts', code: 'Qh' },
    { name: 'King Hearts', code: 'Kh' },
    { name: 'Ace Clubs', code: 'Ac' },
    { name: '2 Clubs', code: '2c' },
    { name: '3 Clubs', code: '3c' },
    { name: '4 Clubs', code: '4c' },
    { name: '5 Clubs', code: '5c' },
    { name: '6 Clubs', code: '6c' },
    { name: '7 Clubs', code: '7c' },
    { name: '8 Clubs', code: '8c' },
    { name: '9 Clubs', code: '9c' },
    { name: '10 Clubs', code: 'Tc' },
    { name: 'Jack Clubs', code: 'Jc' },
    { name: 'Queen Clubs', code: 'Qc' },
    { name: 'King Clubs', code: 'Kc' },
    { name: 'Ace Spades', code: 'As' },
    { name: '2 Spades', code: '2s' },
    { name: '3 Spades', code: '3s' },
    { name: '4 Spades', code: '4s' },
    { name: '5 Spades', code: '5s' },
    { name: '6 Spades', code: '6s' },
    { name: '7 Spades', code: '7s' },
    { name: '8 Spades', code: '8s' },
    { name: '9 Spades', code: '9s' },
    { name: '10 Spades', code: 'Ts' },
    { name: 'Jack Spades', code: 'Js' },
    { name: 'Queen Spades', code: 'Qs' },
    { name: 'King Spades', code: 'Ks' },
];

export const cardCodes: string[] = cardData.map((card) => card.code);

export type CardObject = {
    name: string;
    code: string;
};

export type CardArray = CardObject[];
