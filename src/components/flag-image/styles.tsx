import styled from 'styled-components';

interface CardImageProps {
  src: string;
  alt: string;
  height: string;
}

export const Image = styled.img<CardImageProps>`
  object-fit: cover;
  width: auto;
  height: ${(p: CardImageProps) => p.height};
  display: block;
  margin: 5px auto;
  border: 2px solid black;
`;
