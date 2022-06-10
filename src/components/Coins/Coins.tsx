import React, { useEffect, useState } from 'react';
import Cards from '../CardsContainer/Cards';
import coins from './CoinsApi';

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
  const [filteredData, setFilteredData] = useState<Coin[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [input, setInput] = useState<string>('');

  const initializeData = async () => {
    setLoading(true);
    const res = await coins;
    setData(res.data.data.coins);
    setFilteredData(res.data.data.coins);
    setLoading(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInput(e.target.value);
  };

  useEffect(() => {
    const filterData = data.filter((coin) =>
      coin.name.toLowerCase().includes(input.toLowerCase())
    );
    setFilteredData(filterData);
  }, [coins, input]);

  useEffect(() => {
    initializeData();
  }, []);

  return (
    <div>
      <input
        type='text'
        placeholder='Enter a crypto'
        onChange={handleChange}
      ></input>
      {loading ? (
        <h4>Loading...</h4>
      ) : (
        <Cards data={filteredData} />
        // data.map((item) => <h4 key={item.uuid}>{item.name}</h4>)
      )}
    </div>
  );
};

export default Coins;
