import React from 'react';
import './Card.css';
import Info from '../Info/Info';

interface Coin {
  volume: string;
  btcPrice: string;
  change: string;
  coinRankUrl: string;
  color: string;
  iconUrl: string;
  listedAt: number;
  lowVolume: boolean;
  marketCap: string;
  name: string;
  price: string;
  rank: number;
  sparkLine: string[];
  symbol: string;
  teir: number;
  uuid: string;
}

interface Props {
  coin: Coin;
}

const Card = ({ coin }: Props) => {
  return (
    <div className='card-container'>
      <header>
        <h1>{coin.symbol}</h1>
        <img src={coin.iconUrl} className='coin-icon' />
      </header>
      <Info coin={coin} />
    </div>
  );
};

export default Card;
