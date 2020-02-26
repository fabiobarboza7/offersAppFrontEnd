import styled from 'styled-components';
import logo from '../../assets/images/logo.svg';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  background: linear-gradient(
    15deg,
    var(--dark-secondary-color),
    var(--secondary-color) 70%
  );

  h1 {
    color: #fff;
  }
`;

export const Logo = styled.img.attrs({
  src: logo,
  alt: 'Logo',
})``;
