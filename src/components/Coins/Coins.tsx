import React, { useEffect, useState } from 'react';
import Cards from '../CardsContainer/Cards';
import coins from './CoinsApi';
import { Coin } from '../../Interfaces/index';

interface Props {
  data: Coin[];
  setData: (coin: Coin[]) => void;
  filteredData: Coin[];
  setFilteredData: (coin: Coin[]) => void;
}

const Coins = ({ data, setData, filteredData, setFilteredData }: Props) => {
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
