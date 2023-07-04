import styled from "styled-components";

export const WidePictureFrame = styled.img`
  width: 100%;
  object-fit: cover;
  height: 80vh;
  vertical-align: middle;
  @media screen and (max-width: 768px) {
    display: none;
  } ;
`;
export const HighPictureFrame = styled.img`
  width: 100%;
  height: 55vh;
  object-fit: cover;
  vertical-align: middle;
  @media screen and (min-width: 768px) {
    display: none;
  } ;
`;

export const SponsImg = styled.img``;
