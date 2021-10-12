import React from "react";
import { Grid, Row, Col } from "./Friendselemt";
import {FriendCard} from './Friendcard'

const Festerier = [
  {
    name: "Bi6",
    sektion: "TBI - Sektionen",
    logo: "https://i.imgur.com/BPIPhI2.png",
    website: "https://bi6.se/",
    websitename: "Bi6",
  },
  {
    name: "VI-ling",
    sektion: "Ling - Sektionen",
    logo: "https://i.imgur.com/SZNsMGt.png",
    website: "https://vi-ling.se/",
    websitename: "VI-Ling",
  },
  {
    name: "LÄX",
    sektion: "Lärar - Sektionen",
    logo: "https://i.imgur.com/vvEVNBM.png",
    website: "https://www.lsek.se/Vara-utskott/Laxmasteriet",
    websitename: "LÄX",
  },
  {
    name: "FestMaskineriet",
    sektion: "M - Sektionen",
    logo: "https://i.imgur.com/J5VYPdK.png",
    website: "https://www.festmaskineriet.com/",
    websitename: "Festmaskineriet",
  },
  {
    name: "Y6",
    sektion: "M - Sektionen",
    logo: "https://i.imgur.com/FO7agXd.png",
    website: "https://www.ysex.se/",
    websitename: "Y6",
  },
  {
    name: "ClubMästeriet",
    sektion: "Y - Sektionen",
    logo: "https://i.imgur.com/GbQ0wdO.png",
    website: "https://www.sskal.se/",
    websitename: "ClubMästeriet",
  },
  {
    name: "SSKål",
    sektion: "Sjuksköterke - Sektionen",
    logo: "https://i.imgur.com/MTtiacZ.jpg",
    website: "https://clubmasteriet.se/",
    websitename: "SSKål",
  },
  {
    name: "MedSex",
    sektion: "Medicinska Föreningen",
    logo: "https://i.imgur.com/2j9Y5ES.png",
    website: "https://www.facebook.com/MedSexYeah/",
    websitename: "MedSex",
  },
  {
    name: "Jur6",
    sektion: "Affärsjuridiska Föreningen",
    logo: "https://i.imgur.com/EvSTPbX.png",
    website: "https://jur6.se/",
    websitename: "Jur6",
  },
  {
    name: "OralSpex",
    sektion: "Logoped - Sektionen",
    logo: "https://i.imgur.com/jiL0hJk.png",
    website: "https://oralspex.se/",
    websitename: "OralSpex",
  },
  {
    name: "Reflex",
    sektion: "FYSIO - Sektionen",
    logo: "https://i.imgur.com/DxXKGWQ.png",
    website: "https://www.facebook.com/ReflexFesteri/",
    websitename: "Reflex",
  },
  {
    name: "FylleCellen",
    sektion: "Medicinska - Fakulteten",
    logo: "https://i.imgur.com/pu1B7Dc.png",
    website: "https://www.facebook.com/Fyllecellen/",
    websitename: "FylleCellen",
  },
  {
    name: "sKVaLp",
    sektion: "Kultor - Sektionen",
    logo: "https://i.imgur.com/znEBfy1.jpg",
    website: "https://www.facebook.com/festerietsKVaLp/",
    websitename: "sKVaLp",
  },
  {
    name: "Psyko",
    sektion: "Psykolog - Sektionen",
    logo: "https://i.imgur.com/563EySA.jpg",
    website: "https://www.facebook.com/FesterietPsyKO/",
    websitename: "Psyko",
  },
];

function Ourfriends() {
  return (
    <Grid>
      
      <Row>
      <Col size={1}>
          <FriendCard
            logo={Festerier[0].logo}
            name={Festerier[0].name}
            sektion={Festerier[0].sektion}
            website={Festerier[0].website}
            websitename={Festerier[0].websitename}
          />
        </Col>
      <Col size={1}>
          <FriendCard
            logo={Festerier[1].logo}
            name={Festerier[1].name}
            sektion={Festerier[1].sektion}
            website={Festerier[1].website}
            websitename={Festerier[1].websitename}
          />
        </Col>
        <Col size={1}>
          <FriendCard
            logo={Festerier[2].logo}
            name={Festerier[2].name}
            sektion={Festerier[2].sektion}
            website={Festerier[2].website}
            websitename={Festerier[2].websitename}
          />
        </Col>
        <Col size={1}>
          <FriendCard
            logo={Festerier[3].logo}
            name={Festerier[3].name}
            sektion={Festerier[3].sektion}
            website={Festerier[3].website}
            websitename={Festerier[3].websitename}
          />
        </Col>
      </Row>
      <Row>
        <Col size={1}>
          <FriendCard
            logo={Festerier[4].logo}
            name={Festerier[4].name}
            sektion={Festerier[4].sektion}
            website={Festerier[4].website}
            websitename={Festerier[4].websitename}
          />
        </Col>
        <Col size={1}>
          <FriendCard
            logo={Festerier[5].logo}
            name={Festerier[5].name}
            sektion={Festerier[5].sektion}
            website={Festerier[5].website}
            websitename={Festerier[5].websitename}
          />
        </Col>
        <Col size={1}>
          <FriendCard
            logo={Festerier[6].logo}
            name={Festerier[6].name}
            sektion={Festerier[6].sektion}
            website={Festerier[6].website}
            websitename={Festerier[6].websitename}
          />
        </Col>
        <Col size={1}>
          <FriendCard
            logo={Festerier[7].logo}
            name={Festerier[7].name}
            sektion={Festerier[7].sektion}
            website={Festerier[7].website}
            websitename={Festerier[7].websitename}
          />
        </Col>
      </Row>
      <Row>
        <Col size={1}>
          <FriendCard
            logo={Festerier[8].logo}
            name={Festerier[8].name}
            sektion={Festerier[8].sektion}
            website={Festerier[8].website}
            websitename={Festerier[8].websitename}
          />
        </Col>
        <Col size={1}>
          <FriendCard
            logo={Festerier[9].logo}
            name={Festerier[9].name}
            sektion={Festerier[9].sektion}
            website={Festerier[9].website}
            websitename={Festerier[9].websitename}
          />
        </Col>
        <Col size={1}>
          <FriendCard
            logo={Festerier[10].logo}
            name={Festerier[10].name}
            sektion={Festerier[10].sektion}
            website={Festerier[10].website}
            websitename={Festerier[10].websitename}
          />
        </Col>
        <Col> 
        <FriendCard
          logo={Festerier[11].logo}
          name={Festerier[11].name}
          sektion={Festerier[11].sektion}
          website={Festerier[11].website}
          websitename={Festerier[11].websitename}
        />
        </Col>
        
        
        
      </Row>
      <Row>
        <Col size={1}>
          <FriendCard
            logo={Festerier[12].logo}
            name={Festerier[12].name}
            sektion={Festerier[12].sektion}
            website={Festerier[12].website}
            websitename={Festerier[12].websitename}
          />
        </Col>
        <Col size={1}>
          <FriendCard
            logo={Festerier[13].logo}
            name={Festerier[13].name}
            sektion={Festerier[13].sektion}
            website={Festerier[13].website}
            websitename={Festerier[13].websitename}
          />
        </Col>
      </Row>
    </Grid>
  );
}

export default Ourfriends;
