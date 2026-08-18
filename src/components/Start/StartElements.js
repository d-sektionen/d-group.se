import styled from "styled-components";

export const WidePictureFrame = styled.img`
  display: block;
  width: 100%;

  /*
   * Desktop:
   * Navbar = 72px
   * Bilden fyller exakt resten av den synliga skärmen.
   */
  height: calc(100vh - 72px);
  height: calc(100dvh - 72px);

  object-fit: cover;

  /*
   * Lås bildens nederkant.
   * Om bilden måste beskäras vertikalt sker det från TOPPEN.
   */
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
  vertical-align: middle;

  @media screen and (min-width: 769px) {
    display: none;
  }
`;

export const SponsImg = styled.img``;
