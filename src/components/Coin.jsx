import React from "react";
import "./Coin.css";
import PropTypes from "prop-types";

export default function Coin({ name, ticker, price }) {
  function refreshClickHandler(event) {}
  return (
    <tr className="coin-row">
      <td>{name}</td>
      <td>{ticker}</td>
      <td>$ {price}</td>
      <td>
        <button onClick={refreshClickHandler}>Refresh</button>
      </td>
    </tr>
  );
}

Coin.propTypes = {
  name: PropTypes.string.isRequired,
  ticker: PropTypes.string,
  price: PropTypes.number.isRequired,
};
