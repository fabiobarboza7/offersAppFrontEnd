import api from './api';

export const findAllOffers = async () => {
  const { data } = await api.get('/offers');
  return data;
};

export const showOffer = async offerId => {
  const { data } = await api.get(`/offers/${offerId}`);
  return data;
};
