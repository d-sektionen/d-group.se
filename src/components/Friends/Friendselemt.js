import styled from "styled-components";

export const Grid = styled.div`
    margin-top: 80px;
    overflow: hidden;
    background-color: brown;
    padding-bottom: 2vh;
`

export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    @media (max-width: 768px) { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    padding-top: 2vh;
    
`

export const Col = styled.div`
    min-width: 0;
    background-color:lightpink;
    padding: 2vw;

`
