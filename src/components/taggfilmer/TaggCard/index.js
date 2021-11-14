import React from 'react'
import ReactPlayer from "react-player";
import {Card, Name} from './taggCardElements'
function TaggCard ({url, name}) {
    return(
        <Card>
            <ReactPlayer url={url} controls ={true} width='120%' height='120%'/>  
            <Name>{name}</Name>          
        </Card>

    )
}

export default TaggCard