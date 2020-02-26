import React, { useContext } from 'react';

import { Link } from 'react-router-dom';
import { ActionButtonContainer, ActionButton } from './styles';
import { changeOfferState, deleteOffer } from '../../services/offers.service';
import { Store } from '../../store';
import { offersStatus } from '../../store/offers/actions';

export default function ActionButtons({ id, row }) {
  const [state, dispatch] = useContext(Store);

  async function handleChangeState() {
    await changeOfferState(id);
    if (row.state === 'enabled') {
      row.state = 'disabled';
    } else {
      row.state = 'enabled';
    }
    dispatch(offersStatus([...state]));
  }

  async function handleRemoveOffer() {
    await deleteOffer(id);
    const updatedOffers = state.filter(offer => offer.id !== id);
    dispatch(offersStatus([...updatedOffers]));
  }

  return (
    <ActionButtonContainer>
      <Link to={`/admin/offers/edit/${id}`}>
        <ActionButton type="button">edit</ActionButton>
      </Link>
      {row.ends_at !== null && (
        <ActionButton type="button" onClick={() => handleChangeState()}>
          {row.state === 'enabled' ? 'disable' : 'enable'}
        </ActionButton>
      )}
      <ActionButton type="button" onClick={() => handleRemoveOffer()}>
        destroy
      </ActionButton>
    </ActionButtonContainer>
  );
}
