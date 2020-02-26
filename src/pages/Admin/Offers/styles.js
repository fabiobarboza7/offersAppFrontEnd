import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const OffersContainer = styled.main`
  height: calc(100vh - 150px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 10%;
`;

export const CreateNewOffer = styled(Link).attrs({
  to: '/admin/offers/new',
})`
  text-decoration: none;
  text-align: center;
  margin-top: 20px;
  width: 100%;
  padding: 10px 0;
  background: linear-gradient(45deg, var(--primary-color), #11e3a9);
  font-weight: bold;
  color: var(--secondary-color);
  cursor: pointer;
  transition: 0.4s;

  &:hover {
    letter-spacing: 1.2px;
  }
`;
