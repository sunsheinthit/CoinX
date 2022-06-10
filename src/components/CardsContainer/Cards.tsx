import React from 'react';
import Card from '../Card/Card';
import './Cards.css';

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
  data: Coin[];
}

const Cards = ({ data }: Props) => {
  return (
    <div className='cards-layout'>
      {data.map((coin: Coin) => {
        return <Card key={coin.uuid} coin={coin} />;
        // <h4 key={coin.uuid}>{coin.name}</h4>
      })}
    </div>
  );
};

export default Cards;
