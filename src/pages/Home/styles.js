import styled from 'styled-components';

export const HomeContainer = styled.div`
  margin: 10%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 5px;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }

  @media screen and (min-width: 720px) and (max-width: 960px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const OfferCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 5px;
  background-size: cover;
  background-position: center;
  height: 300px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url('https://source.unsplash.com/400x400/?product');

  transition: 0.4s;

  &:hover {
    box-shadow: 0px 5px 9px #888;
  }
`;

export const OfferTitle = styled.p`
  position: absolute;
  bottom: 20px;
  left: 20px;
  font-size: 30px;
  font-weight: bold;
  color: var(--primary-color);
  text-shadow: 2px 2px #9e2fba;
`;

export const Premium = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  color: var(--secondary-color);
  font-weight: bold;
  padding: 5px 10px;
  border-radius: 50px;
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: 0px 0px 1px #1dff1d;
  animation: blinkStatus 1s infinite;

  background-color: #1dff1d;

  @keyframes blinkStatus {
    0% {
      transform: rotate(0deg) scale(1);
    }
    50% {
      transform: rotate(0deg) scale(1);
      box-shadow: 0px 0px 8px #1dff1d;
    }
    100% {
      transform: rotate(0deg) scale(1);
      box-shadow: 0px 0px 1px #1dff1d;
    }
  }
`;

export const ShopNow = styled.a`
  cursor: pointer;
  width: 100%;
  background-color: #9e2fbabd;
  color: var(--primary-color);
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;
