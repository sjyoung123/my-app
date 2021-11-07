import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState();
  const [coinIndex, setCoinIndex] = useState(0);
  const [changeWon, setChangeWon] = useState(0);
  const dallorWon = 1200;
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://api.coinpaprika.com/v1/tickers");
      const json = await response.json();
      setCoins(json.slice(0, 10));
      setLoading(false);
    }
    fetchData();
  }, []);
  const changeCoin = (event) => {
    const {
      target: {
        options: { selectedIndex },
      },
    } = event;
    setCoinIndex(selectedIndex);
  };
  const changeInput = (event) => {
    const {
      target: { value },
    } = event;
    const coinCash = Number(value);
    setChangeWon(coinCash);
  };
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select onChange={changeCoin}>
          {coins.map((coin) => (
            <option key={coin.id}>
              {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
      <div>
        <input type="number" onChange={changeInput} min="0"></input>
        <span>{coins[coinIndex].symbol}</span>
      </div>
      <div>
        <input
          type="number"
          value={changeWon * coins[coinIndex].quotes.USD.price * dallorWon}
          disabled
        ></input>
        <span>won</span>
      </div>
    </div>
  );
}

export default App;
