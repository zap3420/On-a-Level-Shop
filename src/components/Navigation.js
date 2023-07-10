import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Navigation = ({ title }) => {
  return (
    <Wrapper>
      <NavLink to="/">Home</NavLink>
      &nbsp;/&nbsp;
      <NavLink to="/products">Products</NavLink>
      {title && (
        <>
          &nbsp;/&nbsp;
          <span>{title}</span>
        </>
      )}
    </Wrapper>
  );
};
const Wrapper = styled.section`
  height: 10rem;
  background-color: white;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 2rem;
  margin-left: 2rem;

  a {
    font-size: 2rem;
    text-decoration: none;
    color: rgb(98 84 243);
  }
`;

export default Navigation;
