import React from 'react';
import {Picture, Name, Sektion, Website, Details, Card} from "./friendcardelement"


function friendCard({logo, name, sektion, website, websitename}) {
    return (
        <Card>
            <Picture src={logo}></Picture>
            <Details>
                <Name>{name}</Name>
                <Sektion>{sektion}</Sektion>
                <Website href = {website}>{websitename}</Website>
            </Details>
        </Card>
        
    )
}

export default friendCard;