import React, { useEffect, useState } from 'react';
import './App.css';
import Coins from './components/Coins/Coins';
import Landing from './components/Landing/Landing';
import { Coin } from './Interfaces/index';

function App() {
  const [data, setData] = useState<Coin[]>([]);
  const [filteredData, setFilteredData] = useState<Coin[]>([]);

  return (
    <div className='App'>
      <Landing
        data={data}
        setData={setData}
        filteredData={filteredData}
        setFilteredData={setFilteredData}
      />
      <Coins
        data={data}
        setData={setData}
        filteredData={filteredData}
        setFilteredData={setFilteredData}
      />
    </div>
  );
}

export default App;
