import styled from "styled-components";


export const WidePictureFrame = styled.img`
  width: 100%;
  height: ${(props) => props.height};
  @media screen and (max-width: 768px){
        display: none;
    };   
`;
export const HighPictureFrame = styled.img`
  width: 100vw;
  height: ${(props) => props.height};

  @media screen and (min-width: 768px){
        display: none;
        width:0%;
        height: 0;
    };  
`;

export const SponsImg = styled.img`

`

