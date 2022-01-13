/** @jsxImportSource theme-ui */
import { FunctionComponent } from 'react';
import { Themed } from 'theme-ui';

import { cardCodes } from '../../fixtures';

export const Card: FunctionComponent<CardProps> = ({ code }) =>
    cardCodes.includes(code) ? <Themed.img src={getCard(code)} onClick={() => alert(code)} /> : null;

type CardProps = {
    code: string;
};

const getCard = (code: string) => require(`../../assets/cards/${code}.png`);
