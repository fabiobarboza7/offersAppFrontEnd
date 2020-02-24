import React, { useEffect } from 'react';

import { findAllOffers } from '../../services/offers.service';

export default function Admin() {
  useEffect(() => {
    async function getAllOffers() {
      const { data } = await findAllOffers();
      // console.log(data);
    }

    getAllOffers();
  }, []);

  return <h1>Admin</h1>;
}
