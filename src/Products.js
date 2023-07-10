import styled from "styled-components";
import { popularProducts } from "./data";
import Product from "./Product";
import React from "react";
import { ProgressBar } from "scrolling-based-progressbar";
const Container = styled.div`
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-left: 10rem;
  margin-right: 10rem;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-top: 5rem;
`;
const Products = () => {
  return (
    <>
      <ProgressBar height="0.7rem" color="#4b75bd" bgColor="#ccc" />
      <Wrapper>
        <h3>Products page</h3>
      </Wrapper>
      <hr className="hr--small"></hr>
      <Container>
        {popularProducts.map((item) => (
          <Product item={item} key={item.id} />
        ))}
      </Container>
    </>
  );
};

export default Products;
