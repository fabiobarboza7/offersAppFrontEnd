import { useState, useEffect } from 'react';
import { findAllOffers } from '../services/offers.service';

const loadAllOffers = async setOffers => {
  const { data } = await findAllOffers();
  setOffers([...data]);
};

export function useOffers() {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    loadAllOffers(setOffers);
  }, []);
  return offers;
}
