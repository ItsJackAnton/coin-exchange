import "./App.css";
import logo from "./logo.svg";
import axios from "axios";
import CoinList from "./components/CoinList";
import BalanceAccount from "./components/BalanceAccount";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";

const COIN_COUNT = 5;
const COIN_URL = "https://api.coinpaprika.com/v1/tickers/";

function App() {
  //#region States
  const [Balance, setBalance] = useState(15000);
  const [CoinsInfo, setCoinsInfo] = useState([]);
  const [ShowBalance, setShowBalance] = useState(false);
  //#endregion States

  function handleRefresh(params) {
    CoinsInfo.find(({ ticker }, index) => {
      if (params.ticker === ticker) {
        let _CoinsInfo = [...CoinsInfo];
        _CoinsInfo[index].price = params.price;
        setCoinsInfo(_CoinsInfo);
      }
    });
  }

  async function retrieveCoinData() {
    let response = await axios.get("https://api.coinpaprika.com/v1/coins");
    let coinIds = response.data.slice(0, COIN_COUNT).map((e) => e.id);
    //https://api.coinpaprika.com/v1/tickers/${e.key}
    const promises = coinIds.map((key) => axios.get(COIN_URL + key));
    const coins = await Promise.all(promises);
    const coinData = coins.map((e) => {
      const data = e.data;
      return {
        name: data.name,
        ticker: data.id,
        price: parseFloat(Number(data.quotes["USD"].price).toFixed(2)),
        balance: 0,
      };
    });
    //data.quote.USD.price
    console.log(coinData);
    setCoinsInfo(coinData);
  }

  useEffect(() => {
    if (CoinsInfo.length === 0) {
      retrieveCoinData();
    } else {
      //component did update
    }
  });

  return (
    <div className="App">
      <Header logo={logo} title="Coin Exchange" />
      <div className="app-body">
        <BalanceAccount
          amount={Balance}
          showBalance={ShowBalance}
          handleUpdateShowBalance={setShowBalance}
        />
        <CoinList
          coinInfoArr={CoinsInfo}
          handleRefresh={handleRefresh}
          showBalance={ShowBalance}
          COIN_URL={COIN_URL}
        />
      </div>
    </div>
  );
}

export default App;
