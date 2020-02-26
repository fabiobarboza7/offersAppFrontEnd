import styled from 'styled-components';

export const ActionButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const ActionButton = styled.button`
  cursor: pointer;
  background-color: var(--secondary-color);
  border-radius: 5px;
  color: #fff;
  padding: 5px 10px;
  transition: 0.4s;

  &:hover {
    background-color: var(--dark-secondary-color);
  }
`;
