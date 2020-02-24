import React, { useEffect } from 'react';

import { findAllOffers } from '../../../services/offers.service';
import Form from '../../../components/Form';

export default function Admin() {
  useEffect(() => {
    async function getAllOffers() {
      const { data } = await findAllOffers();
      console.log(data);
    }

    getAllOffers();
  }, []);

  return (
    <>
      <Form />
      <h1>Admin</h1>
    </>
  );
}
