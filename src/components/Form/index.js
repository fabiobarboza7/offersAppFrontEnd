import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import {
  FormContainer,
  FormStyled,
  ErrorContainer,
  ErrorText,
  ErrorTitle,
} from './styles';
import { createOffer, editOffer } from '../../services/offers.service';
import formatDate from '../../util/formatDate';

export default function Form({ editMode, editData }) {
  const [data, setData] = useState({});
  const [errors, setErrors] = useState(false);

  useEffect(() => {
    if (editMode) {
      setData({
        ...editData,
        starts_at: formatDate(editData.starts_at),
        ends_at: formatDate(editData.ends_at),
      });
    }
  }, [editData, editMode]);

  async function handleSubmit(e) {
    e.preventDefault();
    const { id } = data;
    let apiErrors = [];
    if (!editMode) {
      apiErrors = await createOffer(data);
    } else {
      apiErrors = await editOffer(id, data);
    }

    if (apiErrors) {
      setErrors([...apiErrors]);
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }

  function handleChangeCheckbox(e) {
    const { checked } = e.target;
    setData({ ...data, premium: checked });
  }

  function ErrorsList() {
    return (
      <>
        <ErrorTitle>Errors List</ErrorTitle>
        <ErrorContainer>
          {errors.map(error => (
            <ErrorText>{error}</ErrorText>
          ))}
        </ErrorContainer>
      </>
    );
  }

  return (
    <FormContainer>
      <h2>{editMode ? 'Edit Offer' : 'New Offer'}</h2>
      {errors && <ErrorsList />}
      <FormStyled onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          value={data.advertiser_name || ''}
          name="advertiser_name"
          placeholder="advertiser name"
        />
        <input
          onChange={handleChange}
          type="text"
          value={data.url || ''}
          name="url"
          placeholder="url"
        />
        <textarea
          rows="5"
          onChange={handleChange}
          type="text"
          value={data.description || ''}
          name="description"
          placeholder="description"
        />
        <input
          onChange={handleChange}
          type="date"
          value={data.starts_at || ''}
          name="starts_at"
          placeholder="starts at"
        />
        <input
          id={data.ends_at}
          onChange={handleChange}
          type="date"
          value={data.ends_at || ''}
          name="ends_at"
          placeholder="ends at"
        />
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <input
            onChange={handleChangeCheckbox}
            type="checkbox"
            checked={!!data.premium}
            name="premium"
          />
          <p style={{ marginTop: 10, paddingLeft: 10 }}>Premium</p>
        </div>
        <button type="submit">Submit</button>
      </FormStyled>
      <Link to="/admin">back</Link>
    </FormContainer>
  );
}
