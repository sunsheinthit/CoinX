import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import './Info.css';
import millify from 'millify';
import { Coin } from '../../Interfaces/index';

interface Props {
  coin: Coin;
}

const Info = ({ coin }: Props) => {
  return (
    <div className='info-container'>
      <h3 style={{ color: coin.color }}>{coin.name}</h3>
      <h3>
        USD: <span style={{ color: '#118C4F' }}>{coin.price.slice(0, 7)}</span>
      </h3>
      {parseInt(coin.change) > 0 ? (
        <FontAwesomeIcon icon={faArrowUp} className='arrow-up' />
      ) : (
        <FontAwesomeIcon icon={faArrowDown} className='arrow-down' />
      )}
      <span>{coin.change}% in 24h</span>
      <h3>
        Market cap:{' '}
        <span style={{ color: '#118C4F' }}>
          {millify(parseInt(coin.marketCap))}
        </span>
      </h3>
    </div>
  );
};

export default Info;
