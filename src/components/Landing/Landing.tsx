import './Landing.css';
import { Coin } from '../../Interfaces/index';

interface Props {
  data: Coin[];
  setData: (coin: Coin[]) => void;
  filteredData: Coin[];
  setFilteredData: (coin: Coin[]) => void;
}

const Landing = ({ data, setData, filteredData, setFilteredData }: Props) => {
  return <div>Landing</div>;
};

export default Landing;
