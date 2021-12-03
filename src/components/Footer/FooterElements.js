import styled from "styled-components";

export const Grid = styled.div`
  margin-top: -5px;
  box-shadow: 0 50vh 0 50vh #000;
`;

export const Row = styled.div`
  display: flex;
  height: ${(props) => props.height};
  width: 100vw;
`;

export const Col = styled.div`
  flex: ${(props) => props.size};
  background-color: ${(props) => props.color};
  padding: 2vw;
`;

export const Title = styled.h1`
  color: #e5398d;
  text-align: center;
`;

export const Info = styled.p`
  color: white;
  font-size: 2vw;
`;
