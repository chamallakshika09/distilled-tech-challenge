import React, { FC } from 'react';
import { Title } from './styles';

export const AppTitle: FC = ({ children }) => {
  return <Title>{children}</Title>;
};
