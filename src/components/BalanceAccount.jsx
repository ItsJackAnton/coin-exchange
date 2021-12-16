import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Section = styled.section`
  font-size: 2rem;
  text-align: left;
  padding: 1.5rem 0 1.5rem 3rem;
  color: #fff;
`;

export default function BalanceAccount({
  amount,
  showBalance,
  handleUpdateShowBalance,
}) {
  function onClickHandler(e) {
    e.preventDefault();
    const newVal = !showBalance;
    handleUpdateShowBalance(newVal);
  }
  return (
    <Section>
      Balance: $ {showBalance ? amount : "xxxxxxxxxx"}
      <button onClick={onClickHandler}>{showBalance ? "hide" : "show"}</button>
    </Section>
  );
}
BalanceAccount.propTypes = { amount: PropTypes.number.isRequired };
