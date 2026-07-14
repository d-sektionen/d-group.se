import styled from "styled-components";

export const WidePictureFrame = styled.img`
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const HighPictureFrame = styled.img`
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;

  @media screen and (min-width: 769px) {
    display: none;
  }
`;

export const SponsImg = styled.img``;
