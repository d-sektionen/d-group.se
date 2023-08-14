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
    @media (max-width: 768px) {
        flex-direction: column;
        padding-left: 10vw;
        padding-right: 10vw;
    }
`
export const Col =  styled.div`
    flex: 2;
    padding: 2vw;
`

export const Grid = styled.div`
    background-color:   lightpink;
    text-overflow: ellipsis;
    
`