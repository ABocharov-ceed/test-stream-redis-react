import React from  'react';
import { HeaderBlock } from './Header.style';

export const Header = ({children}) => {
  return (
    <HeaderBlock data-testid="header-block">{children}</HeaderBlock>
  )
}