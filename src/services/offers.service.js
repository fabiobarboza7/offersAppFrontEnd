import api from './api';

export const findAllOffers = async () => {
  const { data } = await api.get('/offers');
  return data;
};
