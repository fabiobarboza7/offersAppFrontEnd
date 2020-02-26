import React from 'react';
import { ToastContainer } from 'react-toastify';
import GlobalStyle from './styles/global';
import Routes from './routes';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes />
      <ToastContainer />
    </>
  );
}

export default App;
