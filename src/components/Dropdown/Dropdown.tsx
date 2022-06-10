import { useState, useEffect } from 'react';
import './Dropdown.css';
import { Coin } from '../../Interfaces/index';

// sort by % change
// sort by price
// sort by rank
// sort by market cap

interface Props {
  data: Coin[];
  setData: (coin: Coin[]) => void;
  filteredData: Coin[];
  setFilteredData: (coin: Coin[]) => void;
}

const Dropdown = ({ data, setData, filteredData, setFilteredData }: Props) => {
  const [algo, setAlgo] = useState<string>('rank');

  const changeVal = (e: React.ChangeEvent<{ value: string }>) => {
    setAlgo(e.target.value);
  };

  useEffect(() => {
    sortBy(algo);
  }, [algo]);

  const sortBy = (i: string) => {
    setFilteredData(
      [...filteredData].sort((a: Coin, b: Coin): number => {
        switch (i) {
          case 'rank':
            return a.rank - b.rank;
          case 'change':
            return parseInt(b.change) - parseInt(a.change);
          case 'price':
            return parseInt(b.price) - parseInt(a.price);
          case 'cap':
            return parseInt(b.marketCap) - parseInt(a.marketCap);
          default:
            return 0;
        }
      })
    );
    console.log(filteredData);
  };

  return (
    <div className='drop-container'>
      <label>Sort by: </label>
      <select name='algos' value={algo} onChange={changeVal}>
        <option value='rank'>Rank</option>
        <option value='change'>% Change</option>
        <option value='price'>Price</option>
        <option value='cap'>Market Cap</option>
      </select>
    </div>
  );
};

export default Dropdown;
