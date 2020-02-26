import { toast } from 'react-toastify';
import history from './history';
import api from './api';

export const findAllOffers = async () => {
  const { data } = await api.get('/offers');
  return data;
};

export const showOffer = async offerId => {
  const { data } = await api.get(`/offers/${offerId}`);
  return data;
};

export const createOffer = async offer => {
  try {
    const { data } = await api.post('/offers', offer);
    const { message } = data;
    toast.success(message);
    history.push('/admin');
    return false;
  } catch (error) {
    toast.error(error.response.data.message);
    const listOfErrors = error.response.data.data;
    return listOfErrors;
  }
};

export const editOffer = async (offerId, offer) => {
  try {
    const { data } = await api.put(`/offers/${offerId}`, offer);
    const { message } = data;
    toast.success(message);
    history.push('/admin');
    return false;
  } catch (error) {
    toast.error(error.response.data.message);
    const listOfErrors = error.response.data.data;
    return listOfErrors;
  }
};

export const deleteOffer = async offerId => {
  const { data } = await api.delete(`/offers/${offerId}`);
  const { message } = data;
  toast.success(message);
  history.push('/admin');
};

export const changeOfferState = async offerId => {
  try {
    const { data } = await api.put(`/offers/change_state/${offerId}`);
    const { message } = data;
    toast.success(message);
    history.push('/admin');
  } catch (error) {
    toast.error('the offers could not be updated');
  }
};
