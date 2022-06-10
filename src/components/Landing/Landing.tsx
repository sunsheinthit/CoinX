import Dropdown from '../Dropdown/Dropdown';
import './Landing.css';
import { Coin } from '../../Interfaces/index';
import { useState, useEffect } from 'react';

interface Props {
  data: Coin[];
  setData: (coin: Coin[]) => void;
  filteredData: Coin[];
  setFilteredData: (coin: Coin[]) => void;
}

const Landing = ({ data, setData, filteredData, setFilteredData }: Props) => {
  const [input, setInput] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInput(e.target.value);
  };

  useEffect(() => {
    const filterData = data.filter((coin) =>
      coin.name.toLowerCase().includes(input.toLowerCase())
    );
    setFilteredData(filterData);
  }, [input]);

  return (
    <div className='landing-container'>
      <h1>CoinX</h1>
      <input
        type='text'
        placeholder='Search for a crypto...'
        onChange={handleChange}
        className='search-bar'
      ></input>
      <Dropdown
        data={data}
        setData={setData}
        filteredData={filteredData}
        setFilteredData={setFilteredData}
      />
    </div>
  );
};

export default Landing;
