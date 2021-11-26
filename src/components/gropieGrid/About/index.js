import React from 'react'
import { Title, Text, AboutContainer } from './AboutElements'

function About({title, text}) {
    return (
        <>
            <AboutContainer>
                <Title>{title}</Title>
                <Text>{text}</Text>
            </AboutContainer>
            
        </>
    )
}

export default About
