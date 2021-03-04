import styled from 'styled-components';

interface TextProps {
  fontSize: string;
}

export const Text = styled.div<TextProps>`
  font-size: ${(p: TextProps) => p.fontSize};
  text-align: left;
  padding: 2px 8px;
`;
