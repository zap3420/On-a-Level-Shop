import React, { useRef, useEffect, useContext, useState } from "react";
import styled from "styled-components";
import { CartContext } from "../CartContext";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;

export default function Paypal() {
  const { cartItems, clearCart } = useContext(CartContext);
  const [orderID, setOrderID] = useState(null);
  const paypal = useRef();

  useEffect(() => {
    if (!window.paypal) return;

    const buttons = window.paypal.Buttons({
      createOrder: (data, actions, err) => {
        return actions.order.create({
          purchase_units: [
            {
              description: "Cart Items",
              amount: {
                currency_code: "USD",
                value: cartItems.reduce(
                  (total, item) => total + item.price * item.quantity,
                  0
                ),
                breakdown: {
                  item_total: {
                    currency_code: "USD",
                    value: cartItems.reduce(
                      (total, item) => total + item.price * item.quantity,
                      0
                    ),
                  },
                },
              },
              items: cartItems.map((item) => ({
                name: item.title,
                unit_amount: {
                  currency_code: "USD",
                  value: item.price,
                },
                quantity: item.quantity.toString(),
                category: "PHYSICAL_GOODS",
              })),
            },
          ],
        });
      },
      onApprove: async (data, actions) => {
        const order = await actions.order.capture();
        console.log(order);
        setOrderID(order.id);
        clearCart();
      },
      onError: (err) => {
        console.log(err);
      },
    });

    if (paypal.current.innerHTML === "") {
      buttons.render(paypal.current);
    }

    return () => {
      buttons.close(); // Zatvaranje PayPal dugmeta prilikom unmounta komponente
    };
  }, [cartItems, clearCart]);

  return (
    <Wrapper>
      {!orderID ? (
        <div ref={paypal}></div>
      ) : (
        <div>
          <h3>Thank you for your order!</h3>
          <p>Your order ID is: {orderID}</p>
        </div>
      )}
    </Wrapper>
  );
}
