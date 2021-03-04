import React, { FC } from 'react';
import { BorderText, BorderTextContainer } from './styles';

export const CardBorderText: FC = ({ children }) => {
  return (
    <BorderTextContainer>
      <BorderText>{children}</BorderText>
    </BorderTextContainer>
  );
};
