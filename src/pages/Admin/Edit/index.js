import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { showOffer } from '../../../services/offers.service';
import Form from '../../../components/Form';

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
      <h1>Edit</h1>
      <Form editMode editData={offer} />
    </>
  );
}
