import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-top: 5rem;
`;
const Faq = () => {
  return (
    <>
      <Container>
        <h3>FAQ - Shipping &amp; Returns</h3>
      </Container>
      <hr className="hr--small"></hr>
      <div className="container">
        <p>
          <strong>Return Policy</strong>
        </p>
        <p>
          <strong>
            No returns or refunds are permitted on items discounted 50% or more.
            This policy applies to all sale items, promotional offers or coupon
            codes.
          </strong>
        </p>
        <p>
          <strong>
            Exchanges: We do not offer exchanges via return shipment. You can
            place a new order for the desired item(s) &amp; return the
            previously ordered item(s) you would like to exchange. The cost of
            your returned item will be refunded to your original form of
            payment. <br />
          </strong>
        </p>
        <p>
          Any apparel item that has not been worn or washed can be returned
          within 30 days of receipt. Send the item back to us at the following
          address:
        </p>
        <p className="address">
          BEX Beograd Bexexpress
          <br /> Pančevački put 60, Serbia
          <br /> Belgrade, 11060
        </p>
        <p>
          Include a note that says if you want to return the item, along with
          your Order#, Name, Email Address and Phone.
        </p>
        <p>
          You are responsible for all shipping costs involving a return, the
          only exception is if we made a mistake on your order. In the event we
          made an error we do apologize, contact us immediately and we will send
          you the correct item and prepaid mailer to rectify the situation.
        </p>
        <p>
          When returning an item for a refund, you will be refunded the cost of
          the item purchased. You will not be refunded for the shipping.
        </p>
      </div>
    </>
  );
};

export default Faq;
