import React from "react";
import Coin from "./Coin";
import styled from "styled-components";

const Table = styled.table`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 20px;
  width: auto;
`;
const TableHeader = styled.tr`
  position: relative;
  text-align: center;
  left: 50%;
  transform: translate(-50%);
  display: flex;
  justify-content: center;
  align-self: center;
  color: white;
  font-weight: bold;
  font-size: 1.125rem;
`;

const TableHeaderTd = styled.td`
  width: 25vh;
`;

export default function CoinList({
  coinInfoArr,
  handleRefresh,
  showBalance,
  COIN_URL,
}) {
  return (
    <>
      <Table>
        <thead>
          <TableHeader>
            <TableHeaderTd>Name</TableHeaderTd>
            <TableHeaderTd>Ticker</TableHeaderTd>
            <TableHeaderTd>Price</TableHeaderTd>
            {showBalance && <TableHeaderTd>Balance</TableHeaderTd>}
            <TableHeaderTd></TableHeaderTd>
          </TableHeader>
        </thead>
        <tbody>
          {coinInfoArr.map(({ name, ticker, price, balance }) => {
            return (
              <Coin
                key={ticker}
                name={name}
                ticker={ticker}
                price={price}
                balance={showBalance ? balance : -1}
                handleRefresh={handleRefresh}
                COIN_URL={COIN_URL}
              />
            );
          })}
        </tbody>
      </Table>
    </>
  );
}
