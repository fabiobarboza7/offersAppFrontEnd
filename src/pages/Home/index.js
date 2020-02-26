import React, { useContext, useEffect } from 'react';
import Header from '../../components/Header';
import { Store } from '../../store';

import {
  HomeContainer,
  OfferCard,
  OfferTitle,
  Premium,
  ShopNow,
} from './styles';
import { useOffers } from '../../hooks/offers.hooks';
import { offersStatus } from '../../store/offers/actions';

export default function Home() {
  const offers = useOffers();

  const enabledOffers = offers.filter(offer => offer.state === 'enabled');

  const [, dispatch] = useContext(Store);

  useEffect(() => {
    dispatch(offersStatus([...offers]));
  }, [dispatch, offers]);

  return (
    <>
      <Header title="Home" />
      <HomeContainer>
        {enabledOffers?.map(offer => (
          <OfferCard key={offer.id}>
            <OfferTitle>{offer.advertiser_name}</OfferTitle>
            <ShopNow href={offer.url} target="_blank" rel="noopener noreferrer">
              SHOP NOW
            </ShopNow>
            <Premium hidden={!offer.premium === true}>PREMIUM</Premium>
          </OfferCard>
        ))}
      </HomeContainer>
    </>
  );
}
