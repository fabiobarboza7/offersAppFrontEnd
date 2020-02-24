import React, { useState, useEffect } from 'react';

import { FormStyled } from './styles';

export default function Form({ editMode, editData }) {
  const [data, setData] = useState({});

  useEffect(() => {
    if (editMode) {
      setData({ ...editData });
    }
  }, [editData, editMode]);

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  return (
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
      <input
        onChange={handleChange}
        type="text"
        value={data.description || ''}
        name="description"
        placeholder="description"
      />
      <input
        onChange={handleChange}
        type="text"
        value={data.starts_at || ''}
        name="starts_at"
        placeholder="starts at"
      />
      <input
        onChange={handleChange}
        type="text"
        value={data.ends_at || ''}
        name="ends_at"
        placeholder="ends at"
      />
      <input
        onChange={handleChange}
        type="checkbox"
        value={data.premium || ''}
        name="premium"
      />
      <button type="submit">Submit</button>
    </FormStyled>
  );
}
