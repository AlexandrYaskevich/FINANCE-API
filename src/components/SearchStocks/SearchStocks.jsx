import { useState } from "react";
import { useQuery } from "react-query";
import stocksApi from "../../api/stocksAPI";
import style from './style.module.css';

const SearchStocks = () => {
  const { data, isLoading, error } = useQuery("getStocks", () =>
    stocksApi["getStocks"]()
  );
  const [value, setValue] = useState("");
  const [favstocks, setFavStocks] = useState([]);
  const [savstock, setSavStock] = useState([]);
  const searchLower = value.toLowerCase();
  if (isLoading) {
    return <div>Загрузка...</div>;
  }
  if (error) {
    return <div>Ошибка при загрузке данных</div>;
  }
  const stocks = data || [];
  const filteredStocks = stocks.filter((d) =>
    d.symbol.toLowerCase().includes(searchLower)
  );
  const first15Stocks = filteredStocks.slice(0, 15);
  function addFavorite(st) {
    if (!favstocks.some((f) => f.figi === st.figi)) {
      setFavStocks([...favstocks, st]);
    }
  }
  function DeleteFav(figi) {
    setFavStocks(favstocks.filter((st) => st.figi !== figi));
  }
  async function sendFavStocks() {
    try {
      const response = await fetch("https://httpbin.org/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(favstocks),
      });
      const result = await response.json();
      setSavStock(result.json);
      alert("Данные отправлены! Посмотрите консоль для ответа.");
      console.log("Ответ сервера:", result);
    } catch (error) {
      alert("Ошибка при отправке данных");
      console.error("Ошибка:", error);
    }
  }

  return (
    <div className={style.search}>
        <div>
      <input
        type="text"
        placeholder="Введите название акции..."
        onChange={(e) => setValue(e.target.value)}
      />
      <ul className={style.listsearch}>
        {first15Stocks.map((stock) => (
          <li className={style.stockInList} key={stock.figi} onClick={() => addFavorite(stock)}>
            {stock.symbol}
          </li>
        ))}
      </ul>
        </div>
        <div>
     <ul>
        <h1>You cheked next stocks-</h1>
        {favstocks.map((st) => (
          <div className={style.columnfav}>
            <li className={style.nameStock} key={st.figi}>{st.symbol}</li>
            <p className={style.aboutStock}>{st.description}</p>
            <button className={style.deletbut} onClick={() => DeleteFav(st.figi)}>delete</button>
          </div>
        ))}
      </ul>
      <button className={style.addbutton} onClick={sendFavStocks}>AddFavourite</button>
      </div>
      <div className={style.addserver}>
        <h1>This stocks add to sever</h1>
        {savstock.map((s) => (
          <div>
            <li className={style.stockinserver} key={s.figi}>{s.symbol}</li>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchStocks;