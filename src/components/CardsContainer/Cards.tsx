import React from 'react';
import Card from '../Card/Card';
import './Cards.css';
import { Coin } from '../../Interfaces/index';

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
