import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";

const Header = () => {
  return (
    <>
      <Wrapper>
        <NavLink to="/">
          <img className="logo" src="./images/dior.png" alt="my logo img" />
        </NavLink>
        <Nav />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    height: 10rem;
    margin-top: 1.5rem;
  }
`;
export default Header;
