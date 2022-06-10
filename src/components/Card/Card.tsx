import React from 'react';
import './Card.css';
import Info from '../Info/Info';
import { Coin } from '../../Interfaces/index';

interface Props {
  coin: Coin;
}

const Card = ({ coin }: Props) => {
  return (
    <div className='card-container'>
      <header>
        <h1 style={{ color: coin.color }}>{coin.symbol}</h1>
        <img src={coin.iconUrl} className='coin-icon' />
      </header>
      <Info coin={coin} />
    </div>
  );
};

export default Card;
