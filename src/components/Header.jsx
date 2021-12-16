import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

//#region Styles
const HeaderStyle = styled.header`
  background-color: #282c34;
  min-height: 20vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  align-self: stretch;
`;
const AppTitleStyle = styled.h1`
  font-size: calc(20px + 2vmin);
  color: white;
`;
const AppLogoStyle = styled.img`
  height: 12vmin;
  min-height: 11vmin;
  pointer-events: none;
`;
//#endregion Styles

export default function Header({ logo, title = "Title" }) {
  return (
    <>
      <HeaderStyle className="App-header">
        {logo != null && (
          <AppLogoStyle src={logo} alt="React logo" className="App-logo" />
        )}
        <AppTitleStyle className="App-title">{title}</AppTitleStyle>
      </HeaderStyle>
    </>
  );
}
Header.prototype = {
  title: PropTypes.string,
};
