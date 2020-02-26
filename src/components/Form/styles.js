import styled from 'styled-components';

export const FormContainer = styled.div`
  background-color: #fff;
  padding: 20px;
`;

export const ErrorContainer = styled.ol`
  margin: 10px 0;
  border: 1px solid red;
`;

export const ErrorTitle = styled.h3`
  color: red;
`;

export const ErrorText = styled.li`
  margin: 10px 25px;
`;

export const FormStyled = styled.form`
  border-radius: 4px;

  display: flex;
  flex-direction: column;

  input {
    height: 30px;
    background-color: #d9d9d9;
  }

  textarea {
    padding: 10px;
    background-color: #d9d9d9;
  }

  input,
  textarea,
  button {
    margin-top: 10px;
    padding-left: 10px;
    border: none;
  }

  button {
    text-decoration: none;
    text-align: center;
    margin: 20px 0;
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
  }
`;
