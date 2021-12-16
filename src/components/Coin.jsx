import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import axios from "axios";

const Td = styled.td`
  border: 1px solid #fff;
  color: #fff;
  width: 25vh;
`;

export default function Coin({
  name,
  ticker,
  price,
  balance,
  handleRefresh,
  COIN_URL,
}) {
  async function onClickHandler(e) {
    e.preventDefault();
    const coinData = await axios.get(COIN_URL + ticker);
    handleRefresh({
      ticker,
      price: parseFloat(Number(coinData.data.quotes["USD"].price).toFixed(2)),
    });
  }
  return (
    <tr>
      <Td>{name}</Td>
      <Td>{ticker}</Td>
      <Td>$ {price}</Td>
      {!(balance < 0) && <Td>{balance}</Td>}
      <Td>
        <button onClick={onClickHandler}>Refresh</button>
      </Td>
    </tr>
  );
}

Coin.propTypes = {
  name: PropTypes.string.isRequired,
  ticker: PropTypes.string,
  price: PropTypes.number.isRequired,
};
