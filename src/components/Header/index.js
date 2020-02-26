import React from 'react';

import { Logo, HeaderContainer } from './styles';

export default function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <h1>Admin</h1>
    </HeaderContainer>
  );
}
