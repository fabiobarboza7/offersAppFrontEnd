import React from 'react';

import { Logo, HeaderContainer } from './styles';

export default function Header({ title }) {
  return (
    <HeaderContainer>
      <Logo />
      <h1>{title}</h1>
    </HeaderContainer>
  );
}
