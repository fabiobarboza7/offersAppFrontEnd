import React from 'react';
import Header from '../../../components/Header';
import Form from '../../../components/Form';

import { NewOfferContainer } from './styles';

export default function NewOffer() {
  return (
    <>
      <Header />
      <NewOfferContainer>
        <Form />
      </NewOfferContainer>
    </>
  );
}
