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

  const initializeData = async () => {
    setLoading(true);
    const res = await coins;
    setData(res.data.data.coins);
    setFilteredData(res.data.data.coins);
    setLoading(false);
  };

  useEffect(() => {
    initializeData();
  }, []);

  return (
    <div>
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
