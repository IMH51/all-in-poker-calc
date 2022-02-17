/** @jsxImportSource theme-ui */
import { FunctionComponent } from 'react';
import { CardScroller } from '../Scroller';
import { Odds } from '../Odds';
import { Table } from '../Table';

export const App: FunctionComponent = () => (
    <main sx={{ variant: 'layout.main' }} data-testid="app">
        <h1>All In: Drag and Drop Poker Calculator</h1>
        <CardScroller />
        <Odds />
        <Table />
    </main>
);
