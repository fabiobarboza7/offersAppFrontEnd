import React, { useContext, useEffect } from 'react';

import { Link } from 'react-router-dom';
import Header from '../../../components/Header';
import { useOffers } from '../../../hooks/offers.hooks';

import { OffersContainer, CreateNewOffer } from './styles';
import OffersTable from '../../../components/OffersTable';
import { offersStatus } from '../../../store/offers/actions';
import { Store } from '../../../store';

export default function Admin() {
  const offers = useOffers();

  const [, dispatch] = useContext(Store);

  useEffect(() => {
    dispatch(offersStatus([...offers]));
  }, [dispatch, offers]);
  return (
    <>
      <Header title="Admin" />
      <OffersContainer>
        <OffersTable />
        <CreateNewOffer>NEW OFFER</CreateNewOffer>
        <Link to="/">go home</Link>
      </OffersContainer>
    </>
  );
}
