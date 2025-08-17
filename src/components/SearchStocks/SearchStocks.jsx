import { useState } from 'react';
import style from './style.module.css';
import { useQuery } from 'react-query';
import stocksApi from '../../api/stocksAPI';

const SearchStocks = () => {
    const { data } = useQuery('getStocks', () => stocksApi['getStocks']());
    const [value, setValue] = useState("");
    const first15Stocks = data ? data.slice(0, 15) : [];
    console.log(data);
    return (
        <div className={style.search}>
            <input
                className={style.input}
                type="text"
                placeholder='Write stocks...'
                onChange={(e) => setValue(e.target.value)}
            />
            <ul>
                {first15Stocks.map((stock) => (
                    <li key={stock.figi}>{stock.symbol}</li>
                ))}
            </ul>
        </div>
    );
};

export default SearchStocks;
