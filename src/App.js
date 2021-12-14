import "./App.css";
import Coin from "./components/Coin";
import logo from "./logo.svg";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="React logo" className="App-logo" />
        <h1 className="App-title">Coin Exchange</h1>
      </header>
      <tr className="table-headers">
        <td>Name</td>
        <td>Ticker</td>
        <td>Price</td>
      </tr>
      <Coin name="Bitcoin" ticker="BTC" price={47549} />
      <Coin name="Ethereum" ticker="ETH" price={4900} />
      <Coin name="Tether" ticker="USDT" price={1.0} />
    </div>
  );
}

export default App;
