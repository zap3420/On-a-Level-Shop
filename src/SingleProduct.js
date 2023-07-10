import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { popularProducts } from "./data";
import { Button } from "./styles/Button";
import { useState } from "react";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import Navigation from "./components/Navigation";
import ReactImageMagnify from "react-image-magnify";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
const Card = styled.div`
  border: 1px solid #ccc;
  max-width: 70rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;
const ProductDetails = styled.div`
  flex: 1;
  padding: 2rem;
`;
const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;
const Description = styled.p`
  font-size: 1.6rem;
  margin-bottom: 2rem;
`;
const Price = styled.p`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;
const SizeMenu = styled.select`
  font-size: 1.6rem;
  padding: 0.5rem 1rem;
  margin-right: 1rem;
  border-radius: 0.5rem;
  border: none;
  background-color: ${(props) => (props.selected ? "#8490FF" : "#ccc")};
  color: ${(props) => (props.selected ? "white" : "black")};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.selected ? "#84a0ff" : "#bbb")};
  }
`;
const QuantityLabel = styled.label`
  font-size: 1.6rem;
  margin-right: 1rem;
`;
const QuantityButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1.6rem;
  background-color: #f0f0f0;
  color: black;
  border: none;
  cursor: pointer;
`;
const QuantityValue = styled.span`
  font-size: 1.6rem;
  font-weight: bold;
  margin: 0 1rem;
`;
const Image = styled.span`
  width: 50rem;
  height: 50rem;
`;
const Option = styled.option``;

const SingleProduct = () => {
  const { id } = useParams();
  const product = popularProducts.find((item) => item.id === parseInt(id));
  const [selectedSize, setSelectedSize] = useState("");
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  const [sizeError, setSizeError] = useState(false);

  return (
    <>
      <Navigation title={product.title} />
      <Container>
        <Image>
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: product.title,
                isFluidWidth: true,
                src: product.img,
              },
              largeImage: {
                src: product.img,
                width: 1000,
                height: 1000,
              },
            }}
          />
        </Image>
        <Card>
          <ProductDetails>
            <Title>{product.title}</Title>
            <Description>{product.description}</Description>
            <Price>${product.price}</Price>
            <div className="quantity-container">
              <QuantityLabel>Quantity:</QuantityLabel>
              <QuantityButton
                disabled={quantity <= 1}
                onClick={() => setQuantity(quantity - 1)}
              >
                -
              </QuantityButton>
              <QuantityValue>{quantity}</QuantityValue>
              <QuantityButton onClick={() => setQuantity(quantity + 1)}>
                +
              </QuantityButton>
            </div>
            <div className="product-data-warranty">
              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Free Delivery</p>
              </div>

              <div className="product-warranty-data">
                <TbReplace className="warranty-icon" />
                <p>30 Days Replacement</p>
              </div>
              <div className="product-warranty-data">
                <MdSecurity className="warranty-icon" />
                <p>2 Year Warranty </p>
              </div>
            </div>
            <SizeMenu
              onChange={(e) => {
                setSelectedSize(e.target.value);
                setSizeError(false);
              }}
            >
              <Option value="">Select size</Option>
              <Option value="S">S</Option>
              <Option value="M">M</Option>
              <Option value="L">L</Option>
              <Option value="XL">XL</Option>
            </SizeMenu>
            {sizeError && <p style={{ color: "red" }}>Choose size please</p>}
            <Button
              onClick={() => {
                if (!selectedSize) {
                  setSizeError(true);
                } else {
                  addToCart(product, quantity, selectedSize);
                }
              }}
              style={{ backgroundColor: selectedSize ? "#8490FF" : "red" }}
            >
              {selectedSize ? "Add to Cart" : "Choose size please"}
            </Button>
          </ProductDetails>
        </Card>
      </Container>
    </>
  );
};

export default SingleProduct;
