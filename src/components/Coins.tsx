import React, { useEffect, useState } from 'react';
import axios from 'axios';

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

const Coins = () => {
  const [data, setData] = useState<Coin[]>([]);
  const [loading, setLoading] = useState(false);

  const options = {
    method: 'GET',
    url: 'https://coinranking1.p.rapidapi.com/coins',
    params: {
      referenceCurrencyUuid: 'yhjMzLPhuIDl',
      timePeriod: '24h',
      'tiers[0]': '1',
      orderBy: 'marketCap',
      orderDirection: 'desc',
      limit: '50',
      offset: '0',
    },
    headers: {
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
      'X-RapidAPI-Key': 'c4d7a29999msh9a7e6d0fab39e1bp1cba86jsn1fc19ff6bff9',
    },
  };

  const initializeData = async () => {
    setLoading(true);
    const response = await axios.request(options);
    setData(response.data.data.coins);
    setLoading(false);
  };

  useEffect(() => {
    initializeData();
  }, []);

  return (
    <div>
      <h1>Hello world</h1>
      {loading ? (
        <h4>Loading...</h4>
      ) : (
        data.map((item) => <h4 key={item.uuid}>{item.name}</h4>)
      )}
    </div>
  );
};

export default Coins;
