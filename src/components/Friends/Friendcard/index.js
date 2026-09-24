import React from 'react';
import {Picture, Name, Sektion, Website, Details, Card} from "./Friendcardelement"


export function FriendCard({logo, name, sektion, website}) {
    return (
        <Card>
           
            <Picture src={logo} alt={`${name} logotyp`} loading="lazy"></Picture>
            <Details>
                <Name>{name}</Name>
                <Sektion>{sektion}</Sektion>
                <Website href={website}>{name}</Website>
            </Details>
        </Card>
        
    )
}

