import styled from 'styled-components'

export const Title = styled.h1 `
    font-size: 2rem;
`
export const Description = styled.p`
    font-size:  1rem;
`
export const ÖMSpan = styled.span`
    font-size:  1.5rem;
`
export const Row = styled.div`
    display: flex;
    padding-top:   2vh;
`
export const Col =  styled.div`
    flex: ${(props) => props.size};
    padding: 2vw;
`
export const Grid = styled.div`
    background-color:   lightpink;
    border-color:   brown;
    border: 5px solid brown;
    border-radius:  5%;
    overflow:   hidden;
`