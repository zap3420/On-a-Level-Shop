import styled from "styled-components";
import React from "react";

const Trusted = () => {
  return (
    <Wrapper className="brand-section">
      <div className="container">
        <h3>Trusted by 1000+ Companies</h3>
        <div className="brand-section-slider">
          <div className="slide">
            <img src="./images/trusted/sas.png" alt="trusted-brands" />
          </div>
          <div className="slide">
            <img src="./images/trusted/good nature.png" alt="trusted-brands" />
          </div>
          <div className="slide">
            <img src="./images/trusted/real-afl.png" alt="trusted-brands" />
          </div>
          <div className="slide">
            <img src="./images/trusted/wos.png" alt="trusted-brands" />
          </div>
          <div className="slide">
            <img src="./images/trusted/ups.png" alt="trusted-brands" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  .brand-section {
    padding: 12rem 0 0 0;
  }
  h3 {
    text-align: center;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.text};
    font-size: 2rem;
    font-weight: bold;
  }

  img {
    min-width: 12rem;
    max-width: 30rem;
    height: 20rem;
  }

  .brand-section-slider {
    margin-top: 3.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .brand-section-slider {
      margin-top: 3.2rem;
      display: grid;
      grid-template-columns: 1fr 1fr;

      text-align: center;
    }
    img {
      min-width: 10rem;
      max-width: 20rem;
      height: 12rem;
    }
  }
`;

export default Trusted;
