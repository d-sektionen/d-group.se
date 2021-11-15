import styled from "styled-components";

export const Grid = styled.div`
    margin-top: -5px;
    overflow: hidden;
    padding-bottom: 2vh;
`

export const Row = styled.div`
    display: flex;
    padding-top: 2vh;
`

export const Col = styled.div`
    flex: ${(props) => props.size};
`
