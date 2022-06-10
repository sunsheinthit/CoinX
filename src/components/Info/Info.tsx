import React from 'react';

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

const Info = ({ coin }: Props) => {
  return (
    <div>
      <h2>{coin.name}</h2>
      <h4>Usd: {coin.price.slice(0, 7)}</h4>
    </div>
  );
};

export default Info;
