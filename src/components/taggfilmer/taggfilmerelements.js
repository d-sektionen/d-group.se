import styled from "styled-components";

export const Grid = styled.div`
    margin-top: -5px;
    box-shadow: 0 50vh 0 50vh #000;
    align-items: center;
    overflow: hidden;
    background-color:   lightpink;
    flex-direction: column;
    
`
export const Row = styled.div`
    display: flex;
    height: ${(props) => props.height};
    width: 100vw;
`

export const Col = styled.div`
  flex: ${(props) => props.size};
  padding: 2vw;
`;

export const MovieTitle = styled.h1`
  color: black;
  text-align: center;

`;