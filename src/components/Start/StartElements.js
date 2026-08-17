import styled from "styled-components";

export const WidePictureFrame = styled.img`
  width: 100%;
  height: 804px;
  object-fit: cover;
  object-position: center bottom;
  vertical-align: middle;

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
