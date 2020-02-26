import styled from 'styled-components';

export const TableContainer = styled.div`
  width: 100%;

  table {
    width: 100%;
    color: #fff;
    border-collapse: collapse;
    border-spacing: 0;
    border: 1px solid #ddd;
  }

  table thead {
    tr {
      th {
        padding: 10px 20px;
        border: 1px solid #ddd;
        background: var(--secondary-color);
      }
    }
  }
  table tbody {
    background-color: #fff;
    text-align: center;
    color: grey;
    tr {
      transition: 0.4s;
      cursor: pointer;
      &:hover {
        background-color: #efefef;
        color: var(--secondary-color);
      }
      td {
        font-size: 10px;
        padding: 8px 15px;
        border: 1px solid #ddd;
      }
    }
  }
`;

export const DotStates = styled.div`
  margin: 0 auto;
  width: 15px;
  height: 15px;
  border-radius: 10px;
  ${({ isEnabled }) =>
    isEnabled === 'enabled' &&
    `
    box-shadow: 0px 0px 1px #1dff1d;
    animation: blinkStatus 1s infinite;
  `}

  background-color: ${({ isEnabled }) =>
    isEnabled === 'enabled' ? '#1dff1d' : 'grey'};
  @keyframes blinkStatus {
    0% {
      transform: rotate(0deg) scale(1);
    }
    50% {
      transform: rotate(0deg) scale(1);
      box-shadow: 0px 0px 12px #1dff1d;
    }
    100% {
      transform: rotate(0deg) scale(1);
      box-shadow: 0px 0px 1px #1dff1d;
    }
  }
`;
