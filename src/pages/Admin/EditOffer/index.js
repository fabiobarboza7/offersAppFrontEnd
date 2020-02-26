import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { showOffer } from '../../../services/offers.service';
import Form from '../../../components/Form';

import { EditOfferContainer } from './styles';
import Header from '../../../components/Header';

export default function Edit() {
  const [offer, setOffer] = useState({});
  const { id } = useParams();

  useEffect(() => {
    async function getOffer() {
      const { data } = await showOffer(id);
      setOffer({ ...data });
    }

    getOffer();
  }, [id]);

  return (
    <>
      <Header title="Admin" />
      <EditOfferContainer>
        <Form editMode editData={offer} />
      </EditOfferContainer>
    </>
  );
}
