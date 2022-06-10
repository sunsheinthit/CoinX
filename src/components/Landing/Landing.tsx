import './Landing.css';
import { Coin } from '../../Interfaces/index';
import { useState, useEffect } from 'react';

interface Props {
  data: Coin[];
  setFilteredData: (coin: Coin[]) => void;
}

const Landing = ({ data, setFilteredData }: Props) => {
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
    <div>
      {' '}
      <input
        type='text'
        placeholder='Enter a crypto'
        onChange={handleChange}
      ></input>
    </div>
  );
};

export default Landing;
