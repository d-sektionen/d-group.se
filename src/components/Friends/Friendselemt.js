import styled from "styled-components";

export const Grid = styled.div`
    margin-top: -5px;
    overflow: hidden;
    background-color: brown;
    padding-bottom: 2vh;
`

export const Row = styled.div`
    display: flex;
    padding-top: 2vh;
    
`

export const Col = styled.div`
    flex: ${(props) => props.size};
    background-color:lightpink;
    padding: 2vw;
    margin-left: auto;
    margin-right: auto;
`
