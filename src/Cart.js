import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Paypal from "./components/Paypal";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-left: 10rem;
  margin-right: 10rem;

  img {
    width: 10rem;
    height: auto;
    margin-right: 2rem;
    margin-top: 1.5rem;
  }

  tr.grey-background {
    background-color: #f2f2f2;
  }
`;
const Table = styled.table`
  border-collapse: collapse;
  margin: 2rem 0;
  width: 100%;
`;
const TableHeader = styled.th`
  background-color: #f2f2f2;
  font-weight: bold;
  padding: 1rem;
  text-align: left;
  font-size: 1.6rem;
`;
const TableData = styled.td`
  padding: 1rem;
  text-align: left;
  font-size: 1.7rem;
`;
const RemoveButton = styled.button`
  background-color: #f44336;
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  font-size: 1.6rem;
  padding: 1rem;

  &:hover {
    background-color: #cc2e26;
  }
`;
const ClearCartButton = styled.button`
  background-color: #f44336;
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  font-size: 1.6rem;
  padding: 1rem;
  margin-right: 0.3rem;

  &:hover {
    background-color: #cc2e26;
  }
`;
const ContinueShopping = styled.button`
  background-color: #4caf50;
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  font-size: 1.6rem;
  padding: 1rem;
  text-decoration: none;
  margin-left: 0.2rem;

  &:hover {
    background-color: #2e8b57;
  }
`;
const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    clearCart,
    countItemsInCart,
    calculateTotal,
  } = useContext(CartContext);
  return (
    <Container>
      <h1>Your Cart ({countItemsInCart()})</h1>
      <Table>
        <thead>
          <tr>
            <TableHeader>Product</TableHeader>
            <TableHeader>Quantity</TableHeader>
            <TableHeader>Size</TableHeader>
            <TableHeader>Price</TableHeader>
            <TableHeader>Remove</TableHeader>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item, index) => (
            <tr
              key={item.id}
              style={{ backgroundColor: index % 2 === 1 ? "#f2f2f2" : "white" }}
            >
              <TableData>
                <Link to={`/products/${item.id}`}>
                  <h3>{item.title}</h3> <br></br>
                  <img src={item.img} alt={item.title} />
                </Link>
              </TableData>
              <TableData>
                <strong>{item.quantity}</strong>
              </TableData>
              <TableData>
                <strong>{item.size}</strong>
              </TableData>
              <TableData>
                <strong>${(item.price * item.quantity).toFixed(2)}</strong>
              </TableData>
              <TableData>
                <RemoveButton onClick={() => removeFromCart(item)}>
                  Remove
                </RemoveButton>
              </TableData>
            </tr>
          ))}
        </tbody>
      </Table>
      {cartItems.length > 0 ? (
        <>
          <p>
            <strong>Total: {calculateTotal().toFixed(2)}$</strong>
          </p>
          <div>
            <ClearCartButton onClick={clearCart}>Clear Cart</ClearCartButton>
            <NavLink to="/products">
              <ContinueShopping>Back to products</ContinueShopping>
            </NavLink>
            <Paypal />
          </div>
        </>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </Container>
  );
};
export default Cart;
