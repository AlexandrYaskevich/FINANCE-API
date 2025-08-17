import style from './style.module.css';
import SearchStocks from '../SearchStocks/SearchStocks';

const Stocks = () => {
    return (
        <div className={style.stocks}>
            <h1>STOOOKSSS</h1>
            <SearchStocks />
        </div>
    )
}

export default Stocks;